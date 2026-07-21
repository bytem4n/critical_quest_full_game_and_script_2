const levels=[
{
world:"WORLD 1-1",title:"DEFINE THE REAL PROBLEM",
body:`<div class="lesson-box">
<p><b>MISSION ALERT:</b> A user submits a support ticket that says, “Everything is broken.”</p>
<blockquote>Critical thinking starts by stating the issue clearly.</blockquote>
<p>A vague report can lead to wasted time, incorrect fixes, and unsupported conclusions. Before proposing a solution, ask:</p>
<ul><li>What exactly is not working?</li><li>Who is affected?</li><li>When did it begin?</li><li>What changed before the problem started?</li><li>Can the issue be repeated?</li></ul>
<p>In IT support, “the network is down” is a reported symptom, not a verified cause. The technician must separate what the user experienced from what the evidence proves.</p>
<p class="citation">(Murawski, 2014)</p>
<div class="unlock">SKILL TARGET: PROBLEM DEFINITION</div>
</div>`,
q:"A user says, “The internet is down.” What is the strongest first response?",
a:["Replace the router immediately","Ask specific questions and collect observable facts","Tell the user to wait and hope it fixes itself"],correct:1,
explain:"Correct. Clear definition must come before diagnosis."
},
{
world:"WORLD 1-2",title:"EVIDENCE VALLEY",
body:`<div class="lesson-box">
<p><b>NEW MISSION:</b> A computer is connected to Wi-Fi but cannot reach the internet.</p>
<div class="mission-data"><div>IP ADDRESS<br><b>169.254.34.8</b></div><div>DEFAULT GATEWAY<br><b>NONE</b></div></div>
<p>A weak thinker guesses. A strong thinker looks for evidence.</p>
<p>The address suggests the device failed to receive a valid configuration from DHCP. That supports a possible explanation, but it does not completely prove the cause.</p>
<p>The technician should continue checking DHCP availability, adapter status, physical or wireless connectivity, other affected devices, and relevant logs.</p>
<blockquote>Do not claim more than the evidence can support.</blockquote>
<p class="citation">(Murawski, 2014)</p>
<div class="unlock">SKILL TARGET: EVIDENCE EVALUATION</div>
</div>`,
q:"Which statement is strongest?",
a:["The router is definitely broken","The evidence suggests a DHCP-related issue that should be tested","The user probably changed something"],correct:1,
explain:"Correct. The conclusion matches the strength of the evidence."
},
{
world:"WORLD 2-1",title:"BIAS FOREST",
body:`<div class="lesson-box">
<p><b>WARNING:</b> A hidden enemy has entered the level. The enemy is bias.</p>
<p>Bias can influence what people notice, remember, accept, or ignore. Confirmation bias occurs when someone favors information that supports an existing belief while dismissing evidence that challenges it.</p>
<p>A security analyst says:</p>
<blockquote>“The last five alerts were harmless, so this one is harmless too.”</blockquote>
<p>Past false positives do not prove the current alert is safe. The current alert must be evaluated using current evidence.</p>
<div class="unlock">ENEMY: CONFIRMATION BIAS</div>
</div>`,
q:"How do you defeat confirmation bias?",
a:["Only collect evidence that supports your first idea","Trust your first instinct because experience is always correct","Look for credible evidence that could challenge your conclusion"],correct:2,
explain:"Correct. Critical thinkers test their first idea instead of protecting it."
},
{
world:"WORLD 2-2",title:"WORKPLACE CITY",
body:`<div class="lesson-box">
<p><b>PROFESSIONAL MISSION UNLOCKED.</b></p>
<p>Critical thinking matters because workplace decisions affect people, systems, money, privacy, and organizations. A professional should be able to explain:</p>
<ul><li>What problem was identified</li><li>What evidence was reviewed</li><li>What alternatives were considered</li><li>Why one action was selected</li><li>What risks were involved</li><li>Whether the outcome matched expectations</li></ul>
<p>You can access an internal folder containing private employee information, but it has nothing to do with your task.</p>
<blockquote>Technical ability does not automatically create professional permission.</blockquote>
<p>Ask whether the access is authorized, necessary, potentially harmful, and defensible during a formal review.</p>
<p class="citation">(Lankard, 1991; Murawski, 2014)</p>
<div class="unlock">BADGE TARGET: PROFESSIONAL ETHICS</div>
</div>`,
q:"What is the best action?",
a:["Open the folder because access was not blocked","Use only the access required for an authorized work purpose","Copy the files in case they become useful later"],correct:1,
explain:"Correct. Ability and authorization are not the same."
},
{
world:"WORLD 3-1",title:"MISINFORMATION MINE",
body:`<div class="lesson-box">
<p><b>INCOMING MESSAGE:</b></p>
<blockquote>URGENT! Your account will be permanently deleted in 10 minutes. Click here immediately.</blockquote>
<p>The message is designed to create fear and urgency. Phishing often works by attacking human judgment instead of a technical system.</p>
<p>A critical thinker pauses and asks who sent the message, where the link leads, whether the request matches normal procedures, and whether the request can be verified through another channel.</p>
<p>Digital information should not be trusted simply because it looks official.</p>
<p class="citation">(Trust et al., 2022; Faix et al., 2020)</p>
<div class="unlock">SKILL TARGET: MEDIA VERIFICATION</div>
</div>`,
q:"What is the strongest response?",
a:["Click quickly before the timer ends","Reply and ask whether the message is real","Inspect the sender and link, verify through another channel, and report it"],correct:2,
explain:"Correct. You paused, verified, and reported instead of reacting."
},
{
world:"WORLD 3-2",title:"ARGUMENT CASTLE",
body:`<div class="lesson-box">
<p>To enter the castle, you must understand how arguments work.</p>
<p>An argument contains at least one premise and a conclusion. The conclusion is the claim the speaker wants the audience to accept. The premises are the reasons offered in support of that conclusion.</p>
<blockquote>The company should replace the firewall because it no longer receives security updates.</blockquote>
<p><b>Premise:</b> The firewall no longer receives security updates.</p>
<p><b>Conclusion:</b> The company should replace the firewall.</p>
<p>A strong argument requires premises that are relevant, credible, and strong enough to support the conclusion.</p>
<div class="unlock">ITEM TARGET: LOGIC KEY</div>
</div>`,
q:"“Many companies use this product, so it must be the most secure.” What is wrong with the reasoning?",
a:["Popularity does not prove security","Large companies never use security products","Security products should never be compared"],correct:0,
explain:"Correct. A popular claim can still be unsupported."
},
{
world:"RESEARCH LIBRARY",title:"DATABASE ARCHIVE",
body:`<div class="lesson-box">
<p><b>LIBRARIAN:</b> Strong critical thinking requires credible sources.</p>
<p>Research should not be added only to make a project appear academic. Sources should define important concepts, support professional applications, and strengthen conclusions.</p>
<p>The research used in this project was located through FTCC's public database directory and ERIC records. The sources address critical thinking at work, media literacy, misinformation, information evaluation, and ethical decisions.</p>
<blockquote>Do not use a source simply because it agrees with you. Use it because it is credible, relevant, and properly understood.</blockquote>
<ul><li>Murawski (2014): workplace problem solving, judgment, and analysis</li><li>Trust et al. (2022): digital misinformation and critical media literacy</li><li>Faix et al. (2020): fake news and information literacy</li><li>Lankard (1991): ethical workplace reasoning and conflict resolution</li></ul>
<div class="unlock">RUBRIC TARGET: DOCUMENTATION AND RESEARCH</div>
</div>`,
q:"What is the strongest way to use research in this project?",
a:["List sources without explaining them","Connect each source to a concept or professional example","Use only sources that agree with the first conclusion"],correct:1,
explain:"Correct. Research should be explained and connected to the project."
},
{
world:"FINAL WORLD",title:"FINAL BOSS: THE FIRST CONCLUSION",
body:`<div class="lesson-box">
<p><b>FINAL BOSS DETECTED.</b></p>
<p>The most dangerous conclusion is sometimes the first one. The boss attacks with phrases like:</p>
<ul><li>“Everyone believes it.”</li><li>“I saw it online.”</li><li>“We have always done it this way.”</li><li>“I already know what happened.”</li><li>“There is no need to investigate.”</li></ul>
<p>Defeat the boss with the full decision loop:</p>
<div class="mission-data">
<div><b>1. DEFINE</b><br>State the exact issue.</div>
<div><b>2. GATHER</b><br>Collect credible evidence.</div>
<div><b>3. QUESTION</b><br>Identify assumptions and bias.</div>
<div><b>4. COMPARE</b><br>Test alternative explanations.</div>
<div><b>5. ACT</b><br>Choose a defensible response.</div>
<div><b>6. REVIEW</b><br>Measure and revise.</div>
</div>
<blockquote>A strong thinker changes position when better evidence appears.</blockquote>
<div class="unlock">FINAL TARGET: CRITICAL THINKER</div>
</div>`,
q:"Which statement best describes critical thinking?",
a:["Rejecting every claim","Trusting only personal experience","Evaluating information and forming conclusions supported by evidence and reasoning"],correct:2,
explain:"FINAL BOSS DEFEATED. You used evidence and reasoning instead of protecting your first conclusion."
}
];

const presentationScript = `
<div class="script-step"><h3>Opening</h3><p class="action">Action: Start on the title screen and press Start.</p><p class="say">“Every day, we are surrounded by claims. A coworker says the network is down. An email says an account will be deleted. A headline tries to make us angry. The challenge is not simply knowing what to believe. The challenge is knowing how to decide.”</p></div>
<div class="script-step"><h3>World 1: Define the Problem</h3><p class="action">Action: Walk to the first gate.</p><p class="say">“Critical thinking starts by defining the real problem. In IT, ‘the network is down’ is only a reported symptom. Before fixing anything, a technician must determine who is affected, what failed, when it began, and what evidence is available.”</p></div>
<div class="script-step"><h3>World 2: Evidence</h3><p class="action">Action: Open Evidence Valley.</p><p class="say">“The device has a 169.254 address and no gateway. That evidence suggests a DHCP-related problem, but it does not completely prove the cause. Critical thinking means matching the strength of the conclusion to the strength of the evidence.”</p></div>
<div class="script-step"><h3>World 3: Bias</h3><p class="action">Action: Open Bias Forest.</p><p class="say">“Confirmation bias causes people to favor evidence that supports what they already believe. A security analyst cannot assume the current alert is harmless simply because earlier alerts were false positives. The present evidence must be examined.”</p></div>
<div class="script-step"><h3>World 4: Professional Application</h3><p class="action">Action: Open Workplace City.</p><p class="say">“Critical thinking matters in professional environments because decisions affect people, systems, privacy, and organizations. Technical ability does not automatically create permission. Access should be authorized, necessary, and defensible.”</p></div>
<div class="script-step"><h3>World 5: Media Literacy</h3><p class="action">Action: Open Misinformation Mine.</p><p class="say">“Phishing messages use urgency and fear to bypass careful thought. A critical thinker inspects the sender, checks the link, verifies through another channel, and reports the message instead of reacting immediately.”</p></div>
<div class="script-step"><h3>World 6: Arguments</h3><p class="action">Action: Open Argument Castle.</p><p class="say">“An argument contains premises and a conclusion. The premises must be relevant, credible, and strong enough to support the conclusion. Popularity alone does not prove that a security product is the best or most secure.”</p></div>
<div class="script-step"><h3>Research Library</h3><p class="action">Action: Open the research gate or the Research button.</p><p class="say">“The research for this project was located through FTCC’s public database directory and ERIC. The sources connect critical thinking to workplace judgment, ethical decisions, misinformation, and media literacy.”</p></div>
<div class="script-step"><h3>Final Boss</h3><p class="action">Action: Open the final gate.</p><p class="say">“The final boss is the first conclusion. To defeat it, define the issue, gather evidence, question assumptions, compare alternatives, act, and review the outcome. Critical thinking does not mean rejecting everything. It means forming conclusions that can survive careful questioning.”</p></div>
<div class="script-step"><h3>Closing</h3><p class="say">“A strong thinker is not someone who never changes their mind. A strong thinker changes their mind when better evidence appears. Mission complete.”</p></div>`;

const title=document.getElementById("titleScreen"),game=document.getElementById("gameScreen"),player=document.getElementById("player"),world=document.getElementById("world");
const modal=document.getElementById("modal"),lesson=document.getElementById("lesson"),qbox=document.getElementById("questionBox"),feedback=document.getElementById("feedback");
let x=120, coins=0, activeGate=null, completed=new Set(JSON.parse(localStorage.getItem("cq-full-complete")||"[]"));

function start(){title.classList.add("hidden");game.classList.remove("hidden");update()}
document.getElementById("startBtn").onclick=start;

function move(dir){
 x=Math.max(40,Math.min(3600,x+dir*32));
 player.classList.add("walking");
 setTimeout(()=>player.classList.remove("walking"),120);
 update()
}
function update(){
 player.style.left=x+"px";
 const viewport=innerWidth;
 const camera=Math.max(0,Math.min(3800-viewport,x-viewport*.35));
 world.style.transform=`translateX(${-camera}px)`;
 activeGate=null;
 document.querySelectorAll(".gate").forEach(g=>{
   const gx=parseInt(g.style.left);
   if(Math.abs(x-gx)<105) activeGate=Number(g.dataset.level)
 });
 document.getElementById("levelName").textContent=activeGate===null?"MAP":levels[activeGate].world
}
function openLevel(i){
 const L=levels[i];
 document.getElementById("worldLabel").textContent=L.world;
 document.getElementById("modalTitle").textContent=L.title;
 lesson.innerHTML=L.body;
 qbox.innerHTML=`<h3>MISSION CHALLENGE</h3><p>${L.q}</p>`+L.a.map((a,n)=>`<button class="answer" data-i="${n}">${String.fromCharCode(65+n)}. ${a}</button>`).join("");
 feedback.textContent="";
 feedback.className="feedback";
 qbox.querySelectorAll(".answer").forEach(b=>b.onclick=()=>answer(i,Number(b.dataset.i),L.correct,L.explain));
 modal.classList.remove("hidden")
}
function answer(level,choice,correct,explain){
 if(choice===correct){
   feedback.className="feedback correct";
   feedback.textContent=explain;
   if(!completed.has(level)){
     completed.add(level);coins++;
     localStorage.setItem("cq-full-complete",JSON.stringify([...completed]));
     document.getElementById("coins").textContent=String(coins).padStart(2,"0")
   }
 }else{
   feedback.className="feedback wrong";
   feedback.textContent="Not quite. Recheck the lesson and try again."
 }
}
function enter(){if(activeGate!==null)openLevel(activeGate)}
document.getElementById("leftBtn").onclick=()=>move(-1);
document.getElementById("rightBtn").onclick=()=>move(1);
document.getElementById("enterBtn").onclick=enter;
document.querySelectorAll(".gate").forEach(g=>g.onclick=()=>openLevel(Number(g.dataset.level)));
addEventListener("keydown",e=>{
 if(!modal.classList.contains("hidden"))return;
 if(["ArrowLeft","a","A"].includes(e.key))move(-1);
 if(["ArrowRight","d","D"].includes(e.key))move(1);
 if(e.key==="Enter")enter()
});
document.getElementById("closeModal").onclick=()=>modal.classList.add("hidden");

const sm=document.getElementById("sourcesModal");
document.getElementById("sourcesBtn").onclick=()=>sm.classList.remove("hidden");
document.getElementById("closeSources").onclick=()=>sm.classList.add("hidden");

const pm=document.getElementById("scriptModal");
document.getElementById("scriptContent").innerHTML=presentationScript;
document.getElementById("scriptBtn").onclick=()=>pm.classList.remove("hidden");
document.getElementById("closeScript").onclick=()=>pm.classList.add("hidden");

coins=completed.size;
document.getElementById("coins").textContent=String(coins).padStart(2,"0");
update();