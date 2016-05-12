from django.contrib import admin
from .models import AlbumImage, MyAlbum


class AlbumImageAdmin(admin.ModelAdmin):
    list_display = ('user', 'image', 'status')
    list_editable = ('status', )

admin.site.register(AlbumImage, AlbumImageAdmin)

admin.site.register(MyAlbum)
