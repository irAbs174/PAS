from django.shortcuts import render

def new_analys(request):
  return render(request, 'pages/analys/new.html', { 'segment': 'analys' })