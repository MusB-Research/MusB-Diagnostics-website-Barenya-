from django.db import models


class CorporatePlan(models.Model):
    """Corporate health plan tiers shown on the Employer Hub page."""
    name = models.CharField(max_length=100)
    price_display = models.CharField(max_length=100, help_text='e.g. $108 - $178, Co-Pay, $0, Custom')
    price_suffix = models.CharField(max_length=50, blank=True, help_text='e.g. / employee, Ledger tracked')
    description = models.TextField()
    is_featured = models.BooleanField(default=False)
    tag_label = models.CharField(max_length=50, blank=True, help_text='e.g. Most Popular')
    icon_name = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class PlanFeature(models.Model):
    """Individual features listed under each corporate plan."""
    plan = models.ForeignKey(CorporatePlan, on_delete=models.CASCADE, related_name='features')
    text = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f'{self.plan.name} — {self.text}'


class ComparisonRow(models.Model):
    """Feature comparison matrix rows across all plans."""
    feature_name = models.CharField(max_length=200)
    annual_coverage = models.BooleanField(default=False)
    match_program = models.BooleanField(default=False)
    free_membership = models.BooleanField(default=False)
    medical_advice = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.feature_name
