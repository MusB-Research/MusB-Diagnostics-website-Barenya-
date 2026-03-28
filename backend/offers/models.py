from django.db import models


class Offer(models.Model):
    """Promotional health offers (weekly, monthly, seasonal)."""
    TYPE_CHOICES = [
        ('Weekly', 'Weekly'),
        ('Monthly', 'Monthly'),
        ('Seasonal', 'Seasonal'),
    ]
    CATEGORY_CHOICES = [
        ('Vitamins', 'Vitamins'),
        ('Heart', 'Heart'),
        ('Thyroid', 'Thyroid'),
        ('Women\'s', 'Women\'s'),
        ('Metabolic', 'Metabolic'),
        ('STD', 'STD'),
    ]

    title = models.CharField(max_length=200)
    offer_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    includes = models.JSONField(default=list, help_text='List of tests included')
    original_price = models.DecimalField(max_digits=8, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=8, decimal_places=2)
    time_left = models.CharField(max_length=50, help_text='e.g. 3d 14h or Limited Time')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.title} ({self.offer_type})'
