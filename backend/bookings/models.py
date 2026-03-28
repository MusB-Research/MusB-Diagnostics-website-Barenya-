from django.db import models


class Appointment(models.Model):
    """Appointment booking requests from the Book Now page."""
    VISIT_CHOICES = [
        ('home', 'Home Collection'),
        ('lab', 'Lab Visit'),
    ]
    TIME_SLOT_CHOICES = [
        ('morning', 'Morning (8 AM - 12 PM)'),
        ('afternoon', 'Afternoon (12 PM - 4 PM)'),
        ('evening', 'Evening (4 PM - 8 PM)'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    test_name = models.CharField(max_length=200, help_text='Selected test or package')
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=20, choices=TIME_SLOT_CHOICES)
    visit_type = models.CharField(max_length=10, choices=VISIT_CHOICES, default='home')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} — {self.test_name} ({self.preferred_date})'
