from django.db import models
    

class driver(models.Model):
    name = models.CharField(max_length=200)
    date_of_birth = models.DateField(blank=True)
    id_num = models.CharField(max_length=50)
    date_issue = models.DateField(blank=True)
    driving_school_name = models.CharField(max_length=500)
    licence_condition = models.CharField(max_length=700)
    
    def __str__(self):
        return self.name

class driverLicence(models.Model):
    licenceNo = models.CharField(max_length=200)
  
    def __str__(self):
        return self.licenceNo
    
class drivesDetails(models.Model):
    name = models.CharField(max_length=200)
    date_of_birth = models.DateField(blank=True)
    id_num = models.CharField(max_length=50)
    date_issue = models.DateField(blank=True)
    driving_school_name = models.CharField(max_length=500)
    licence_condition = models.CharField(max_length=700)
    num_of_accidents = models.IntegerField
    decision = models.CharField(max_length=800)
    
    def __str__(self):
        return self.name

# class Todo(models.Model):
#     title = models.CharField(max_length=120)
#     description = models.TextField()
#     decision = models.TextField()
#     condition = models.IntegerField()
#     # completed property is the status of the task, and we will set the default to False.
#     completed = models.BooleanField(default=False)

#     def _str_(self):
#         return self.title
    
class Todo1(models.Model):
    title = models.CharField(max_length=120, primary_key=True)
    description = models.TextField()
    decision = models.TextField()
    condition = models.IntegerField()
    # completed property is the status of the task, and we will set the default to False.
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
