import{l as a}from"./alpha-zone-labs-logo-D7k3N0Cj.js";const t=document.querySelector("#app");async function o(){const e=await fetch("/api/auth/session",{credentials:"include"});return e.ok?e.json():(window.location.replace("/"),null)}function n(e){t.innerHTML=`
    <header class="portal-header">
      <a href="/dashboard.html" class="portal-brand">
        <img src="${a}" alt="Alpha Zone Labs" />
        <span>Review Portal</span>
      </a>
      <div class="portal-user">
        <span>${e.email}</span>
        <button id="sign-out" type="button">Sign out</button>
      </div>
    </header>
    <main class="dashboard-shell">
      <section class="dashboard-intro">
        <p class="eyebrow">Review management</p>
        <h1>Send and moderate reviews.</h1>
        <p>This authenticated dashboard is ready for the review invitation and moderation workflow.</p>
      </section>
      <section class="dashboard-grid">
        <article class="dashboard-card">
          <h2>Send a review request</h2>
          <form id="review-request-form">
            <label for="customer-name">Customer name</label>
            <input id="customer-name" name="name" type="text" autocomplete="name" />
            <label for="customer-email">Customer email</label>
            <input id="customer-email" name="email" type="email" autocomplete="email" required />
            <button type="submit" disabled>Review workflow coming next</button>
          </form>
        </article>
        <article class="dashboard-card">
          <h2>Pending reviews</h2>
          <p>No review submissions have been connected yet.</p>
        </article>
      </section>
    </main>
  `,document.querySelector("#sign-out").addEventListener("click",async()=>{await fetch("/api/auth/logout",{method:"POST",credentials:"include"}),window.location.replace("/")})}o().then(e=>{e&&n(e)}).catch(()=>window.location.replace("/"));
