from followship.models import Follow


def get_number_followers(user):
    followers = Follow.objects.followers(user)
    return len(followers)


def get_number_following(user):
    following = Follow.objects.followings(user)
    return len(following)