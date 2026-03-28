from django.db import models


class HeroContent(models.Model):
    """Hero section content for the home page."""
    badge_text = models.CharField(max_length=100, default='Next-Gen Diagnostics')
    title = models.CharField(max_length=300)
    subtitle = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Hero Content'

    def __str__(self):
        return self.title


class Service(models.Model):
    """'Choose Your Path' service cards on the home page."""
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon_name = models.CharField(max_length=50, help_text='Lucide icon name (e.g. User, Briefcase)')
    link = models.CharField(max_length=200)
    features = models.JSONField(default=list, help_text='List of feature strings')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    """Customer testimonials / social proof."""
    author_name = models.CharField(max_length=100)
    content = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.author_name} - {self.rating}★'


class PopularPanel(models.Model):
    """Popular test panels displayed on the home page."""
    name = models.CharField(max_length=150)
    icon_name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    link = models.CharField(max_length=200, default='/tests')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class NewsletterSubscriber(models.Model):
    """Newsletter email subscriptions."""
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email
