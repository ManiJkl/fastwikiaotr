// Datos base. Formato: {sec, grp, star, name, desc}
// sec: Memories | Perks | Families | Artifacts | Cosmetics
window.AOTR_DATA = [];
(function(){
  const D = window.AOTR_DATA;
  const add = (sec, grp, star, rows) => rows.forEach(r => D.push({sec, grp, star, name: r[0], desc: r[1]}));
  const M = (grp, star, rows) => add("Memories", grp, star, rows);

  // ---------- MEMORIES ----------
  M("Core", 0, [
    ["Blood Awakening", "Spawn with a full Awakening Bar, Awakening lasts for 90s, Whilst Awakened, gain +50.0% DAMAGE and +30.0% DAMAGE RESISTANCE, but Awakening Bar Gain is 75.0% slower"],
    ["Elementalist", "ALL status effects are empowered, BURN: 25.0% chance to ignite into INFERNO, dealing +50.0% DAMAGE, BLEED: Limb regeneration time +15s (affects bosses), CORROSION: Potency +35.0%, FEAR: Titans have +20.0% critical hit vulnerability, SHOCK: Deals 70.0% DAMAGE to the afflicted titan"]
  ]);

  M("Offense", 1, [
    ["Crescendo", "Deals 20% more DMG to stunned Titans"],
    ["Blitzblade", "Holding your M1 increases your overall DMG"],
    ["Swiftshot", "Perform refills 25% faster"],
    ["Surgeshot", "Holding your Spear’s M1 for longer increases the BLAST RADIUS"]
  ]);
  M("Offense", 2, [
    ["Stalwart", "Blade durability increases by 3% for every broken segment"],
    ["Stormcharged", "DMG increases by 3.0% for each shifter present in a match"]
  ]);
  M("Offense", 3, [
    ["Quakestrike", "Every kill buffs users’ damage for 1.5%, which resets after reloading blades, refilling Thunderspears, or shifting/ejecting. (50-kill limit for ODM and 20-kill limit for shifters before damage buffs stop.)"],
    ["Furyforge", "Damage buffed by 0.4% for every 1% of HP lost."],
    ["Assassin", "Blade skills deal 25.0% more DMG and have +15.0% skill CD reduction"],
    ["Amputation", "Critical hits dealt to non-boss type titans' limbs disables limb regeneration"],
    ["Supernova", "Increase DMG by 25% but decrease DMG by 2.5% for every 100m you are from the explosion"]
  ]);
  M("Offense", 4, [
    ["Overslash", "30.0% of any excess DMG from a finishing blow applies to other titans in a 125m radius. Can hit up to 3 Titans (4 second Cooldown)"],
    ["Gambler", "All DMG fluctuates between 75.0%-130.0% (Perfect Form makes this 85.0% to 140.0%)"],
    ["Afterimages", "Spear explosions create a smaller explosion in their wake, doing 40.0% DMG. (4 second cooldown)"]
  ]);
  M("Offense", 5, [
    ["Sparks of Black", "Gain +20.0% SUPER CRIT CHANCE and +40.0% SUPER CRIT DAMAGE, Super Crits reduce skill cooldowns by 3s and deal 20.0% BLEED DAMAGE"],
    ["Shatterpoint", "Consecutive hits on the same limb increase its DAMAGE taken by 15.0%, up to +75.0% (resets after 5s without a hit), At the cap, the next hit is a guaranteed Super Crit, dealing maximum DAMAGE"]
  ]);

  M("Defense", 1, [
    ["Guardian", "Ignores 2 injuries per match"],
    ["Deflectra", "Has a 5% chance to completely ignore injury every hit"]
  ]);
  M("Defense", 2, [
    ["Aegisurge", "Gain a temporary shield which has 15% of your max HP as HP for 20 seconds after a successful Titan kill. (Shifter forms only a get a 5% shield)"],
    ["Riposte", "Successful counters instantly execute a titan"]
  ]);
  M("Defense", 3, [
    ["Resilience", "Ignore up to 1 killing blow per match"],
    ["Vengeflare", "Reflect 50% of incoming DMG for 20 seconds when Tough as Nails Skill is active"],
    ["Steel Frame", "All explosions deal 25.0% less self DMG and grant immunity to any explosions for 5s"]
  ]);
  M("Defense", 4, [
    ["Necromantic", "Upon ignoring death, gain +20.0% DMG, +25.0% HP and +15.0% SPEED. (Does not grant you a revive)"],
    ["Thanatophobia", "When below 40.0% HP, gain +25.0% DMG REDUCTION, +15.0% INJURY CHANCE REDUCTION and heal an injury every 15s."]
  ]);
  M("Defense", 5, [
    ["Living Legend", "HEALTH multiplied by 1.25x, Immune to injuries, Harmful status effects are 30.0% less effective on you, Order effects are 30.0% more effective on you, Incoming healing increases by 35.0%"],
    ["Untouchable", "Each second without taking DAMAGE grants +2.0% ALL stats and +3.0% SHIELD, stacking up to 10s, For every 25 SHIELD lost, deal 20.0% DAMAGE to nearby titans, inflicting CORROSION, You take 1.50x more DAMAGE"]
  ]);

  M("Support", 1, [
    ["Cooldown Blitz", "Skill cooldown reduction increases by 10%"],
    ["Mendmaster", "Gain an extra bandage each time your gas and blades are refilled"]
  ]);
  M("Support", 2, [
    ["Lifefeed", "Killing a Titan offers a 2% HP regain"],
    ["Vitalize", "Saving a teammate Heals both of you for 10% HP and boosts each of your next attack’s DMG by 25%"],
    ["Gem Fiend", "Obtain +10.0% more Gems from AFK Zone/Mission Streak. (Stacks with other sources of Gem boost. Does not stack with copies of itself.)"]
  ]);
  M("Support", 3, [
    ["Omnirange", "Ranged Skills impact every player on the map, regardless of range"],
    ["Flashstep", "Flips and Dashes now have I-Frames"],
    ["Tactician", "All support skills have +15.0% to their effects (Buffs, Duration and Radius)"]
  ]);
  M("Support", 4, [
    ["Bloodthief", "Being hooked onto an enemy titan recovers 3.0% of your health every 2s"],
    ["Apotheosis", "Awakening Bar fills 15.0% faster, can shift at 60.0% bar, and +1.25% DMG per 10% of Awakening Bar filled. (DMG increase applies to both ODM/TS and shifters as long as you have a shifter bar or Rage mode bar."]
  ]);
  M("Support", 5, [
    ["Overclocked", "Each hook deals up to 100.0% DAMAGE, Each consecutive hook grants +3.0% ODM/TS DAMAGE and +6.0% ODM/TS SPEED, stacking up to 15 times (resets upon touching the ground)"],
    ["Divine Decree", "Flares and orders have their effects multiplied by 1.40x and grant +15.0% SHIELD to ALL allies, Using one flare triggers ALL other equipped flares at once, Using one order triggers ALL other equipped orders at once"]
  ]);
})();
