# Generated by Django 5.0.4 on 2024-06-08 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0006_alter_community_writer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='rating',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
