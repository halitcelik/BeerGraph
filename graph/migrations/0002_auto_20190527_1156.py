# Generated by Django 2.2.1 on 2019-05-27 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('graph', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='mayalama',
            field=models.IntegerField(default=22),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='beer',
            name='abv',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='beer',
            name='ilk_olcum',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='beer',
            name='malt_miktari',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='beer',
            name='son_olcum',
            field=models.FloatField(),
        ),
    ]