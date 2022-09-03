from django.urls import path
from . import views


urlpatterns = [
    path('', views. index , name='list'),
    path('update/<str:pk>/',views.update , name='update'),
    path('delete/<str:pk>/',views.delete , name='delete'),
    path('login',views.loginPage , name='login'),
    path('register',views.register , name='register'),
    path('logoutuser',views.logoutuser , name='logoutuser'),

    
  

    
    

    



]


