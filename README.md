# Django-Todo-App-With-User-Login-MySQL-Database

This App Created With DJango Frame work , Javascript , Jquery and Bootstrap 
This is a simple Web app which included a user login,registration functions with Django Model Forms

<b>
User Registration Form With Validation
<b>

![todo1](https://user-images.githubusercontent.com/73699937/188285744-ae7dcdc0-fcdd-4ac9-8631-3f3fb70ae23f.png)

Login Function
<br>
![todo2](https://user-images.githubusercontent.com/73699937/188285752-91173ea3-0e6d-4797-8154-dbe459a71cc9.png)

We Can Add Task And Completec Task Can Update With Tick Mark
![todo3](https://user-images.githubusercontent.com/73699937/188285756-c1b9e43b-f262-49ae-a9bf-9662a074e5fb.png)


We can Easily Update , Delete , And Mark As Completed 
![todo4](https://user-images.githubusercontent.com/73699937/188285759-fb5c8fa0-43a4-45a6-b964-db8a98c93692.png)

Different Tasks For Different User's
![image](https://user-images.githubusercontent.com/73699937/188285804-14a9ee9d-0179-4eb9-8606-600051f5bfdc.png)


#DataBase Configuration - Here its implimented with phpmyadmin

    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'tododb',
        'USER': 'root',
        'PASSWORD': '',
        'HOST':'localhost',
        'PORT':'3306',
    }
}

Don't Forget to add SECRET_KEY  in Settings.py
