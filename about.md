---
layout: default
title: About
permalink: /about/
style: css/about.css
description: I'm Andrew Li, high school senior from Omaha, Nebraska. Currently an EECS and math student at MIT.
---

![Me in SF](/assets/images/profile.jpg)

I'm Andrew Li, a **student** studying computer science, electrical engineering, and mathematics at the **Massachusetts Institute of Technology** in Cambridge, MA. I was previously a cloud services intern at **Palo Alto Networks** working on authentication and authorization. Back in Omaha, I was a **math TA**, **student researcher** and **cybersecurity intern** at the University of Nebraska-Omaha. You can view my resume [here](/resume.pdf).

I ❤️  building tech for fun and taking things apart. On the arts side, I'm a nationally-recognized jazz musician on the alto sax and enjoy tinkering with sounds and beats. You can contact me at *me (at) andrewli (dot) dev*.

<div class="profiles">
{% for profile in site.profiles %}
  <a href="{{ profile.link }}">
    {% svg "{{ profile.logo }}" %}
  </a>
{% endfor %}
</div>
