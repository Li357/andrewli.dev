---
layout: default
title: About
permalink: /about/
style: css/about.css
description: I'm Andrew Li, high school senior from Omaha, Nebraska. Currently a student and number theory TA at the University of Nebraska-Omaha.
---

![Portrait](/assets/images/portrait.jpg)

I'm Andrew Li, high school senior from Omaha, Nebraska. Currently a student and **number theory TA** at the University of Nebraska-Omaha. Previously a **student researcher** in mathematics and a **cybersecurity intern** there.

I ❤️ building web and mobile apps for fun and learning new math. On the arts side, I'm a nationally-recognized jazz musician on the alto sax.

<div class="profiles">
{% for profile in site.profiles %}
  <a href="{{ profile.link }}">
    {% svg "{{ profile.logo }}" %}
  </a>
{% endfor %}
</div>
