import json

from django.contrib.auth.models import User
from django.http import Http404, HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.shortcuts import render
from django.core.urlresolvers import reverse
from guardian.decorators import permission_required_or_403
from userena.decorators import secure_required

from album.forms import AlbumImageUploadForm
from album.models import AlbumImage, MyAlbum
from configurations.utils import get_active_service_categories
from contacts.utils import get_user_contact
from profiles.models import Profile
from profiles.utils import get_user_profile
from profiles.views import makeContextForNotifications
from services.utils import get_user_services



@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def album(request, username):

    user = get_object_or_404(User, username__iexact=username)

    if request.is_ajax():
        images = AlbumImage.objects.active_images(user)
        data = [{'thumb': i.image.url, 'filelink': i.image.url} for i in images]
        return HttpResponse(json.dumps(data), content_type='application/json')

    if request.method == 'POST':
        if request.POST.get('select'):
            selected_image_ids = request.POST.getlist('selected')
            selected_images = AlbumImage.objects.filter(user=user, id__in=selected_image_ids)
            if selected_images.exists():
                my_album, _c = MyAlbum.objects.get_or_create(user=user)
                my_album.images.clear()
                for image in selected_images:
                    my_album.images.add(image)
            return redirect(request.path)
        elif request.POST.get('select_delete'):
            selected_image_ids = request.POST.getlist('selected')
            for image_id in selected_image_ids:
                image = AlbumImage.objects.get(id=image_id, user=user)
                if image:
                    image.delete()
            return redirect(request.path)
        else:
            all_files = request.FILES.getlist('image')
            for files in all_files:
                files1 = {'image':files}
                form = AlbumImageUploadForm(request.POST, files1)
                form.user = user
                if form.is_valid():
                    obj = form.save(commit=False)
                    obj.image_size = obj.image.size
                    obj.user = user
                    obj.status = 1
                    obj.save()
                    obj.send_notification_email_to_administrator()

            return redirect(request.path)
    else:
        form = AlbumImageUploadForm()

    context = {
        'form': form,
        'images': AlbumImage.objects.filter(user=user),

        'profile': get_user_profile(user),
        'contact': get_user_contact(user),
        'services': get_user_services(user),
        'service_categories': get_active_service_categories(),
    }
    context = makeContextForNotifications(request, context)
    return render(request, 'profiles/album.html', context)


@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def set_album_image(request, username):
    user = get_object_or_404(User, username__iexact=username)
    profile = get_user_profile(user)

    qs = AlbumImage.objects.filter(user=user, id=request.GET.get('img_id'))
    if qs.exists():
        the_image = qs[0]
        if request.GET.get('is_avatar') == '1':
            profile.avatar = the_image.image
        else:
            profile.card_image = the_image.image
        profile.save()
        return HttpResponse(the_image.image.url)
    raise Http404


@secure_required
@permission_required_or_403('change_profile', (Profile, 'user__username', 'username'))
def delete_album_image(request, username, image_id):
    user = get_object_or_404(User, username__iexact=username)
    image = AlbumImage.objects.get(id=image_id, user=user)
    if image:
        image.delete()
    return redirect(reverse('profiles:album', args=[username]))

