from django.db import models


class StudyService(models.Model):
    """Study support services: collection, processing, storage, shipping."""
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon_name = models.CharField(max_length=50, default='FlaskConical')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Study Services'

    def __str__(self):
        return self.title


class BiorepositoryInfo(models.Model):
    """Biorepository system stats and capabilities."""
    stat_label = models.CharField(max_length=100, help_text='e.g. Uptime & Reliability')
    stat_value = models.CharField(max_length=50, help_text='e.g. 99.99%')
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Biorepository Info'

    def __str__(self):
        return f'{self.stat_label}: {self.stat_value}'


class Collaboration(models.Model):
    """Academic collaboration opportunities."""
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon_name = models.CharField(max_length=50, default='GraduationCap')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class QuoteRequest(models.Model):
    """Research proposal / quote request submissions."""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('responded', 'Responded'),
    ]

    name = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    email = models.EmailField()
    study_title = models.CharField(max_length=300)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.study_title}'


class ResearchNewsletter(models.Model):
    """Research-specific newsletter subscriptions."""
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email
