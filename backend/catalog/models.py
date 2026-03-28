from django.db import models


class TestCategory(models.Model):
    """Health goal categories for filtering tests."""
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Test Categories'

    def __str__(self):
        return self.name


class LabTest(models.Model):
    """Individual lab tests available in the catalog."""
    SAMPLE_CHOICES = [
        ('Blood', 'Blood'),
        ('Urine', 'Urine'),
        ('Swab', 'Swab'),
        ('Saliva', 'Saliva'),
    ]
    TURNAROUND_CHOICES = [
        ('24h', '24 Hours'),
        ('48h', '48 Hours'),
        ('72h', '72 Hours'),
        ('5d', '5 Business Days'),
    ]

    title = models.CharField(max_length=200)
    category = models.ForeignKey(TestCategory, on_delete=models.CASCADE, related_name='tests')
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    preparation = models.CharField(max_length=200, help_text='e.g. Fasting: 10-12 hrs')
    sample_type = models.CharField(max_length=20, choices=SAMPLE_CHOICES, default='Blood')
    turnaround = models.CharField(max_length=10, choices=TURNAROUND_CHOICES, default='24h')
    icon_name = models.CharField(max_length=50, default='Activity')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return f'{self.title} (${self.price})'
