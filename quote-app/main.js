import './style.css';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby2DyI3R8U8ah5GWkYyiy4kz80VC9dtjtvBFkO3DRmAJpGGKAy_IrJ30PvL5e2Wf229rw/exec';

const platforms = {
  glossgenius: { label: 'GlossGenius', features: ['Online booking','Appointment calendar','Client records','Deposits','Card payments','Appointment reminders','Forms and waivers','Cancellation and no-show fees','Gift cards','Marketing messages','Reviews','Business reporting'] },
  shopify: { label: 'Shopify', features: ['Online storefront','Product listings','Checkout','Inventory tracking','Shipping','Local pickup','Discount codes','Gift cards','Customer accounts','Abandoned-cart emails','Sales reporting','Point of sale'] },
  square: { label: 'Square', features: ['Card payments','Point of sale','Appointments','Invoices','Online store','Inventory','Customer records','Gift cards','Payroll','Reporting'] },
  stripe: { label: 'Stripe', features: ['Website payments','Online checkout','Deposits','Subscriptions','Invoices','Payment links','Customer billing'] },
  paypal: { label: 'PayPal', features: ['Online payments','PayPal checkout','Invoices','Payment links','Pay Later','Customer payments'] },
  google: { label: 'Google Workspace', features: ['Business email','Calendar','Google Drive','Google Forms','Google Sheets','Google Meet','Document storage'] },
  quickbooks: { label: 'QuickBooks', features: ['Bookkeeping','Expense tracking','Invoices','Payroll','Taxes','Financial reporting','Inventory'] },
  mailchimp: { label: 'Mailchimp', features: ['Email marketing','Automated emails','Customer lists','Promotional campaigns','Landing pages','Marketing reports'] },
  other: { label: 'Other platform', features: ['Booking','Payments','Online store','Customer management','Inventory','Marketing','Accounting','Communication'] }
};

const state = { index: 0, steps: [], contact: {}, selectedPlatforms: [], platformResponses: {}, goals: [], customerFeatures: [], ownerFeatures: [], transition: '', monthlyBudget: '', projectBudget: '', timeline: '', success: '' };
const wizard = document.querySelector('#wizard');
const form = document.querySelector('#quoteForm');
const footer = document.querySelector('#wizardFooter');
const thankYou = document.querySelector('#thankYou');
const back = document.querySelector('#backButton');
const next = document.querySelector('#nextButton');
const progress = document.querySelector('#progressBar');
const progressLabel = document.querySelector('#progressLabel');
const stepLabel = document.querySelector('#stepLabel');
const error = document.querySelector('#errorMessage');

const checkboxStep = (eyebrow,title,description,name,options,selected=[]) => ({
  render: () => `<p class="eyebrow">${eyebrow}</p><h2>${title}</h2><p class="lead">${description}</p><fieldset class="form-area"><legend>Select all that apply</legend><div class="choices two">${options.map((v,i)=>choice(name,`${name}-${i}`,v,selected.includes(v))).join('')}</div></fieldset>`,
  validate: () => checked(name).length ? true : fail('Please select at least one option.'),
  save: () => { state[name] = checked(name); }
});

const baseSteps = [
  { id:'contact', render:renderContact, validate:validateContact, save:saveContact },
  { id:'platforms', render:renderPlatforms, validate:()=>checked('selectedPlatforms').length?true:fail('Please select at least one platform.'), save:savePlatforms },
  checkboxStep('New system goals','What should the new system improve?','Choose the outcomes that matter most.','goals',['Reduce monthly software costs','Make booking easier','Improve the branded customer experience','Increase product sales','Reduce no-shows','Automate reminders and follow-up','Manage everything in one place','Improve reporting','Prepare for future growth'],state.goals),
  checkboxStep('Customer experience','What should customers be able to do?','Choose the customer-facing capabilities you want.','customerFeatures',['View services and prices','Book appointments','Pay deposits or balances','Reschedule or cancel','Join a waitlist','Shop products','Track orders','Create an account','Rebook previous services','Contact the business'],state.customerFeatures),
  checkboxStep('Owner tools','What should the owner be able to manage?','Choose the capabilities needed in the admin area.','ownerFeatures',['Services and prices','Calendar and availability','Appointments','Client records','Products and inventory','Store orders','Website content','Gallery images','Promotions and discounts','Reports and performance'],state.ownerFeatures),
  { id:'transition', render:renderTransition, validate:()=>document.querySelector('input[name="transition"]:checked')?true:fail('Please select one option.'), save:()=>state.transition=document.querySelector('input[name="transition"]:checked').value },
  { id:'budget', render:renderBudget, validate:validateBudget, save:saveBudget },
  { id:'success', render:renderSuccess, validate:()=>document.querySelector('input[name="success"]:checked')?true:fail('Please select one option.'), save:()=>state.success=document.querySelector('input[name="success"]:checked').value },
  { id:'review', render:renderReview, validate:()=>true, save:()=>{} }
];

function rebuild(){
  const platformSteps = state.selectedPlatforms.map(key=>({ id:`platform-${key}`, render:()=>renderPlatform(key), validate:()=>validatePlatform(key), save:()=>savePlatform(key) }));
  state.steps=[baseSteps[0],baseSteps[1],...platformSteps,...baseSteps.slice(2)];
}

function render(){
  error.textContent='';
  wizard.innerHTML=state.steps[state.index].render();
  const current=state.index+1,total=state.steps.length,pct=Math.round(current/total*100);
  stepLabel.textContent=`Step ${current} of ${total}`;progressLabel.textContent=`${pct}%`;progress.style.width=`${pct}%`;
  back.style.visibility=state.index===0?'hidden':'visible';
  next.textContent=state.index===total-1?'Submit request':'Continue';
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderContact(){return `<p class="eyebrow">Start here</p><h1>Let’s plan a better system.</h1><p class="lead">Tell us where to send your confirmation and recommendations.</p><div class="form-area"><div class="field"><label for="businessName">Business name</label><input id="businessName" type="text" value="${esc(state.contact.businessName||'')}" autocomplete="organization"></div><div class="field"><label for="contactName">Your name</label><input id="contactName" type="text" value="${esc(state.contact.contactName||'')}" autocomplete="name"></div><div class="field"><label for="contactEmail">Email address</label><input id="contactEmail" type="email" value="${esc(state.contact.contactEmail||'')}" autocomplete="email" inputmode="email"></div></div>`}
function validateContact(){const b=value('businessName'),n=value('contactName'),e=value('contactEmail');if(!b||!n||!e)return fail('Please complete all fields.');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return fail('Please enter a valid email address.');return true}
function saveContact(){state.contact={businessName:value('businessName'),contactName:value('contactName'),contactEmail:value('contactEmail')}}
function renderPlatforms(){return `<p class="eyebrow">Current tools</p><h2>Which platforms do you currently use?</h2><p class="lead">We will show a separate feature screen for each platform you select.</p><fieldset class="form-area"><legend>Select all that apply</legend><div class="choices two">${Object.entries(platforms).map(([k,p])=>choice('selectedPlatforms',`platform-${k}`,p.label,state.selectedPlatforms.includes(k),k)).join('')}</div></fieldset>`}
function savePlatforms(){const before=JSON.stringify(state.selectedPlatforms);state.selectedPlatforms=checked('selectedPlatforms');Object.keys(state.platformResponses).forEach(k=>{if(!state.selectedPlatforms.includes(k))delete state.platformResponses[k]});if(before!==JSON.stringify(state.selectedPlatforms))rebuild()}
function renderPlatform(key){const p=platforms[key],r=state.platformResponses[key]||{features:[],cost:'',future:''};return `<p class="eyebrow">Platform details</p><h2>How do you use ${p.label}?</h2><p class="lead">Select the features you currently rely on.</p><div class="form-area"><fieldset><legend>Features used</legend><div class="choices two">${p.features.map((v,i)=>choice(`${key}Features`,`${key}-f-${i}`,v,r.features.includes(v))).join('')}</div></fieldset><div class="field"><label for="${key}Cost">Approximate monthly cost</label><select id="${key}Cost"><option value="">Select a range</option>${options(['Free','Under $25','$25–$50','$51–$100','$101–$150','More than $150','Unsure'],r.cost)}</select></div><fieldset><legend>Preferred future</legend><div class="choices">${['Keep it connected','Replace it with the new system','Consolidate some features','I need a recommendation'].map((v,i)=>radio(`${key}Future`,`${key}-future-${i}`,v,r.future===v)).join('')}</div></fieldset></div>`}
function validatePlatform(key){if(!checked(`${key}Features`).length)return fail('Please select at least one feature.');if(!document.querySelector(`#${key}Cost`).value)return fail('Please select the monthly cost.');if(!document.querySelector(`input[name="${key}Future"]:checked`))return fail('Please select a preferred future option.');return true}
function savePlatform(key){state.platformResponses[key]={features:checked(`${key}Features`),cost:document.querySelector(`#${key}Cost`).value,future:document.querySelector(`input[name="${key}Future"]:checked`).value}}
function renderTransition(){const vals=['Replace as much as possible','Keep booking connected','Keep storefront connected','Keep both connected initially','I need a recommendation'];return `<p class="eyebrow">Transition</p><h2>How would you prefer to move forward?</h2><p class="lead">This is only a preference and does not lock you into a decision.</p><fieldset class="form-area"><legend>Choose one</legend><div class="choices">${vals.map((v,i)=>radio('transition',`transition-${i}`,v,state.transition===v)).join('')}</div></fieldset>`}
function renderBudget(){return `<p class="eyebrow">Budget</p><h2>What investment range fits the business?</h2><div class="form-area"><div class="field"><label for="monthlyBudget">Preferred monthly operating cost</label><select id="monthlyBudget"><option value="">Select a range</option>${options(['Under $25','$25–$50','$51–$100','$101–$150','More than $150','Unsure'],state.monthlyBudget)}</select></div><div class="field"><label for="projectBudget">Target design and development budget</label><select id="projectBudget"><option value="">Select a range</option>${options(['Under $2,500','$2,500–$5,000','$5,001–$10,000','$10,001–$15,000','More than $15,000','Needs to be discussed'],state.projectBudget)}</select></div><fieldset><legend>Preferred launch timing</legend><div class="choices">${['As soon as possible','Within 30 days','Within 60–90 days','Within 3–6 months','No firm deadline'].map((v,i)=>radio('timeline',`timeline-${i}`,v,state.timeline===v)).join('')}</div></fieldset></div>`}
function validateBudget(){if(!value('monthlyBudget')||!value('projectBudget'))return fail('Please select both budget ranges.');if(!document.querySelector('input[name="timeline"]:checked'))return fail('Please select a launch timeframe.');return true}
function saveBudget(){state.monthlyBudget=value('monthlyBudget');state.projectBudget=value('projectBudget');state.timeline=document.querySelector('input[name="timeline"]:checked').value}
function renderSuccess(){const vals=['Lower monthly overhead','A smoother booking process','More product sales','Less manual work','A stronger branded customer experience','One system that is easier to manage','A combination of these outcomes'];return `<p class="eyebrow">Success</p><h2>What would make this project feel successful?</h2><p class="lead">Choose the result that best represents your main priority.</p><fieldset class="form-area"><legend>Choose one</legend><div class="choices">${vals.map((v,i)=>radio('success',`success-${i}`,v,state.success===v)).join('')}</div></fieldset>`}
function renderReview(){const platformNames=state.selectedPlatforms.map(k=>platforms[k].label).join(', ');return `<p class="eyebrow">Review</p><h2>Ready to submit?</h2><p class="lead">Review the summary below. Use Back to make changes.</p><div class="review-grid">${review('Business',state.contact.businessName)}${review('Contact',state.contact.contactName)}${review('Email',state.contact.contactEmail)}${review('Current platforms',platformNames)}${review('Main goals',state.goals.join(', '))}${review('Preferred approach',state.transition)}${review('Monthly target',state.monthlyBudget)}${review('Project budget',state.projectBudget)}${review('Launch timing',state.timeline)}${review('Success priority',state.success)}</div>`}

async function forward(){const step=state.steps[state.index];if(!step.validate())return;step.save();if(state.index===state.steps.length-1){submit();return}state.index++;render()}
function backward(){if(state.index>0){state.index--;render()}}
function submit(){if(APPS_SCRIPT_URL.startsWith('REPLACE_')){fail('Google Apps Script URL has not been configured yet.');return}next.disabled=true;next.textContent='Submitting…';const postForm=document.createElement('form');postForm.method='POST';postForm.action=APPS_SCRIPT_URL;postForm.target='quoteSubmissionFrame';postForm.style.display='none';const payload=document.createElement('input');payload.name='payload';payload.value=JSON.stringify({...state,steps:undefined,index:undefined,submittedAt:new Date().toISOString(),source:'quote.alphazonelabs.com'});postForm.appendChild(payload);document.body.appendChild(postForm);postForm.submit();setTimeout(showThanks,5000)}
function showThanks(){form.hidden=true;footer.hidden=true;thankYou.hidden=false;window.scrollTo({top:0,behavior:'smooth'})}
window.addEventListener('message',e=>{if(e.data?.type==='ALPHA_QUOTE_SUCCESS')showThanks()});
back.addEventListener('click',backward);next.addEventListener('click',forward);

function choice(name,id,label,isChecked=false,value=label){return `<div class="choice"><input id="${id}" name="${name}" type="checkbox" value="${esc(value)}" ${isChecked?'checked':''}><label for="${id}">${label}</label></div>`}
function radio(name,id,label,isChecked=false){return `<div class="choice radio"><input id="${id}" name="${name}" type="radio" value="${esc(label)}" ${isChecked?'checked':''}><label for="${id}">${label}</label></div>`}
function checked(name){return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(x=>x.value)}
function value(id){return document.querySelector(`#${id}`)?.value.trim()||''}
function options(vals,selected){return vals.map(v=>`<option value="${esc(v)}" ${v===selected?'selected':''}>${v}</option>`).join('')}
function review(label,val){return `<article class="review-card"><strong>${label}</strong><span>${esc(val||'Not provided')}</span></article>`}
function fail(msg){error.textContent=msg;return false}
function esc(v){return String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;')}

rebuild();render();