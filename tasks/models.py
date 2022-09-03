from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


# Create your models here.


#Form create for task
class Task(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.title

User._meta.get_field('email')._unique = True