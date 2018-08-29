---
layout: post
title: Building an Electric Bike
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

In terms of top speed and mileage, I don't have any hard numbers, other than fast and far. If I was to guess, around 30 mph and about 18-20 mile range. Why two motors? Sure, I could get one big motor, but I bet that I can fit two motors in to a smaller package. Plus, it's cool to say your ebike has two motors. Pedal-less start can be acheived through a high KV motor combined with low gearing, or a more realistic gear reduction and the use of sensored motors. Right now, I'm thinking about going with the latter, as it would better preserve top speed.

As for the supercapacitors, I plan on designing and building the bike first, determine its speed and range, starting abilities, etc. before implementing the supercapacitors to aide in high-current delivery. This way, I'll have a solid benchmark for a before and after comparison.

The "idea" behind adding supercapacitors is very much the same behind a traditional KER(kinetic energy recovery) system used on buses. The li-ion battery is great for high capacity, low discharge use, where a super or ultracapacitor is great for low capacity, high discharge applications. Combine the two, and you get the best of both worlds. The supercapacitor handles high current scenarios such as starting or hard regenerative braking, meaning that the li-ion battery does not see quick, burst current discharges. This keeps the pack temperature and increases the li-ion battery's life, as much as 30% on commercial KERS. I'm not entirely sure about this second point, but I beleive having greater burst current capability Most likely, I will need to create some sort of current control circuit to make this all work in unison.

So, what next? Right now, I am drawing up the rear of my bike in Solidworks. With the preliminary requirements out of the way, I can focus on drivetrain placement that satisfies the physical requirements such as retention of disc brakes. The second thing that needs to be worked out is the gearing, system voltage, and the battery pack specifications that will satisfy those requirements.
