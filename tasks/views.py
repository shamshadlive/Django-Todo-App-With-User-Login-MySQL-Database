from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.http import JsonResponse
import json

from django.contrib.auth import authenticate,login ,logout

from django.contrib.auth.decorators import login_required

from .models import *
from .forms import *


# Create your views here.







#check username
def checkAvailability(request):

   
   if request.method=="POST":

        getdata=json.load(request)
        
        print(getdata)
        id = getdata['id']
        
        if id=='Input_Username':
           user_name = getdata['check_item']
           data = {
            'id': id,
            'is_taken': User.objects.filter(username=user_name).exists(),
                  }

        elif id=='Input_Email':

            email = getdata['check_item']
            data = {
            'id': id,
            'is_taken': User.objects.filter(email=email).exists(),
                  }
        else :
             data = {
            'id': 'null',
                  }

        return JsonResponse(data)
   else:

    return redirect('/')












#login user
def loginPage(request):

     if request.user.is_authenticated:
        return redirect('/')
     else: 

        if request.method == 'POST':

            username = request.POST.get('inputUsername') 
            password = request.POST.get('inputPassword') 
            #Authenticate User
            user = authenticate(request, username=username , password=password)

            if user is not None:
                #login approved
                login(request, user)
                return redirect('/')
                
            else:
                #sending error message
                messages.info(request, 'Username or password wrong')
                return render(request, 'tasks/login.html')

     return render(request, 'tasks/login.html')

#register user
def register(request):
    #For loged users , not access register page
    if request.user.is_authenticated:
        return redirect('/')
    else: 
        #get user form
        form = CreateUserForm()
        if request.method == 'POST':

            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                username = form.cleaned_data.get('username')
                messages.success(request, 'Sucessfully created account for '+username)
                return redirect('login')


        context={'form':form}
        return render(request, 'tasks/register.html',context)



#logout function
def logoutuser(request):
    logout(request)
    return redirect('login')

#Redirect unauthorized user's from accessing home page
@login_required(login_url='login')
#home page
def index(request):

    if request.method =='POST':
            form = TaskForm(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("Form Not Saved")
            return redirect('/')

    #setting default value for users
    form = TaskForm(initial={'creator': request.user})

    #filtering tasks according to user id
    tasks = Task.objects.filter(creator=request.user)
   
    
    context = {'tasks':tasks,'form':form}
    return render(request, 'tasks\list.html' , context)

#update task
@login_required(login_url='login')
def update(request,pk):
    #getting task accoriding to user id
    task= Task.objects.get(id=pk)
    form = TaskForm(instance=task)

    if request.method =='POST':

        #set already field
       form = TaskForm(request.POST,instance=task)
       if form.is_valid():
        form.save()
        return redirect('/')


    context = {'task':task,'form':form}

    return render(request, 'tasks/update.html' , context)


#delete task   
@login_required(login_url='login')
def delete(request,pk):

    if request.method == 'POST':

        task= Task.objects.get(id=pk)
        task.delete()
        return redirect('/')
    
    else:
        return HttpResponse('YOu are not authorised')




    


 