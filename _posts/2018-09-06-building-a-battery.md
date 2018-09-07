---
layout: post
title: How to Build a Safe Li-ion Battery 
---

The specifications of the electrike bike have been finalized! I'll post more details soon, but a quick overview:

- A single 13S(48V) 1750W Sensored Motor (45A max continous current)
- ~20 Mile Range
- Geared for ~30 mph top speed
- Open Source Vedder VESC v4.12 Speed Controller  (45A max continous current)
- 48V Battery Management System (45A max continous current)

The selection of these specifications ultimately came down to the instantaneous availability of certain combinations of motor, esc, and battery management system(BMS). The BMS ended up being the hardest to find, as the only cheap 48V systems availible in the U.S. were low continous current models(35A and under). I ended up buying what appears to be a high quality 60A 13S BMS by a company called Deligreen for about $26. Now with the motor and ESC combo picked out, the battery specifications are a little more obvious.

# How to Build a Safe Li-ion 18650 Battery

This is intended to be a rather general guide of building 18650 packs for a variety of uses. As such this goes over the very basics of the 18650 cell.

## The 18650 Cell

18650 is a reference to the form factor of a single unprotected lithium cell. Each cell is 65mm long, with a diameter of 18mm. Most name brand cell manufactures have a ±0.2mm tolerance to both of these dimensions.

### Electrical Charicteristics



### Protected vs Unprotected

Despite the name, unprotected 18650 cells contain two protection devices required by law to be sold in the U.S. First, a resetable PTC(Pressure, Temperature, Current) Switch. The PTC utilizes a bimetallic material that expands under heat. When heat is generated through over-current, the PTC will expand at the desired temperature limit and break contact with the positive terminal of the battery. When the cell has cooled, the PTC will again make contact, making this a resetable switch. One downside, is that the PTC will fatigue over time if tripped often, and the resistance of the switch will increase. Try not to trip it. The second protection device built in to all name brand cells is called the CID. The CID is a permanent pressure releive valve. If a continued over-charge event occurs, the cell could reach a point where the internal pressure is great enough to trip the CID, venting toxic gas, disconnecting the positive terminal and making the cell unusable.

It is a good practice not to rely on these built in mechanisms, and therefore an external battery management system is almost always reccomended.

Protected cells just happen to contain their own single cell management system stored on a PCB often located where the negative terminal would be. This circuitry protects against over-charging, over-discharging, and over-current events like short circuiting. This extra PCB means that the overall length a protected cell is longer, and this length varies by manufacture. They are often a good 3 to 5mm longer than standard unprotected cells.

If you are building a flashlight or other small low current device that a person may hold or be very close to, I very highly recommend purchasing protected 18650 cells over non-protected ones. These almost always have to be bought new simply because they are simply not often found on the used market. Please note that most protected 18650 cells limit discharge current to around 6A, and as such they are not usefull for high current applications.

