---
layout: post
title: Building an Electric Bike
author: Brian Glen
---

<p align="center">
  <img src="https://www.brianglen.com/assets/bike.png" alt="The bike we will be using"/>
</p>

This is the first project in which I actually will be documenting the build process as the project progresses. I have tons of documentation and pictures for the LED clock project, I just need to get some time and post it here.

Electric Bike? Because why not. Ever since the remote control tank was built(also need to post some pictures of that), it seems pretty cool to build your own battery packs from scratch.

To get in to the electric bike project, lets start off by naming a few constraints and requirements that should help me figure out how to go about this:

- Pedaling must be retained
- Disc Brakes must be retained
- Electric System must be easily removed from the bike 
- Lithium Ion Battery pack made of individual 18650-size cells
- Two Brushless RC Motors as the drive
- Pedal-less start
- Must be useful at low speed(weaving around pedestrians at OSU)
- Under $600
- Room left for my supercapacitor experiment
- regenerative braking
- ~30 mph top speed
- ~18-20 mile range

<p align="center">
  <img src="https://www.brianglen.com/assets/bike_rear_wheel.png" alt="Rear Wheel"/>
</p>

In terms of top speed and mileage, I don't have any hard numbers, other than fast and far. If I was to guess, around 30 mph and about 18-20 mile range. Why two motors? Sure, I could get one big motor, but I bet that I can fit two motors in to a smaller package. Plus, it's cool to say your ebike has two motors. Pedal-less start can be acheived through a low KV motor combined with low gearing, however this would limit the bike's usability at high speed. The best method, is to utilize a sensored motor, allowing the speed controller to sense the position of the motor can at super low rpms, allowing smooth starts

As for the supercapacitors, I plan on designing and building the bike first, determine its speed and range, starting abilities, etc. before implementing the supercapacitors to aide in high-current delivery. This way, I'll have a solid benchmark for a before and after comparison.

The "idea" behind adding supercapacitors is very much the same behind a traditional KER(kinetic energy recovery) system used on some european buses. The li-ion battery is great for high capacity, low discharge use, where a super or ultracapacitor is great for low capacity, high discharge applications. Combine the two, and you get the best of both worlds. The supercapacitor handles high current scenarios such as starting or hard regenerative braking, meaning that the li-ion battery does not see quick, burst current discharges. This keeps the pack temperature and increases the li-ion battery's life, as much as 30% on commercial KERS. I'm not entirely sure about this second point, but I beleive having greater burst current capability Most likely, I will need to create some sort of current control circuit to make this all work in unison.

<p align="center">
  <img src="https://www.brianglen.com/assets/cad_rear_frame.png" alt="It's getting there..."/>
</p>

So far, the drivetrain has been fully designed, parts have been bought, and the motor mounts and belt tensioners have been 3D printed in ABS. The rear pulley, due to it's large size and weird design(in order to clear the brake caliper), is going to be made by carbon fiber layup. So far, I have the mold designed in Solidworks, and I am waiting for my friend's X-Carve CNC router to be availible. The X-Carve features 65 millimeters of Z travel, allowing you to create some pretty awesome three-dimensional parts.
