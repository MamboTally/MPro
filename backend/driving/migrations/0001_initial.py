# Generated by Django 4.1.3 on 2022-11-14 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Police',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('id_num', models.CharField(max_length=50)),
                ('driving_school_name', models.CharField(max_length=500)),
                ('licence_condition', models.CharField(max_length=700)),
            ],
        ),
    ]
