import{S as g,i as d}from"./assets/vendor-BvkBopno.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const m={method:"GET"},y="42598065-1779ad5a953180c3fe77c2809",h="https://pixabay.com/api/?";async function L(e){try{const t=new URLSearchParams({key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(h+t,m);if(!o.ok)throw new Error(`Error(getGalleryData): ${o.status}`);return await o.json()}catch(t){return`Exception(getGalleryData): ${t}`}}const w=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(e,t){t.innerHTML=E(e),w.refresh()}function E(e){return e.hits.map(({webformatURL:t,largeImageURL:o,tags:a,likes:r,views:n,comments:s,downloads:p})=>`
				<li class="gallery-item hvr-grow">
					<a class="gallery-link" href="${o}">
						<figure class="gallery-figure ">
							<img class="gallery-image" src="${t}" alt="${a}" loading="lazy">
							<figcaption class="gallery-figcaption">
								<ul class="img-content-wrapper">
									<li>Likes<span>${r}</span></li>
									<li>Views<span>${n}</span></li>
									<li>Comments<span>${s}</span></li>
									<li>Downloads<span>${p}</span></li>
								</ul>
							</figcaption>
						</figure>
					</a>
				</li>
		`).join("")}const c={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again!"},l={blue:"#abd4f8",orange:"#f28111",red:"#e97782"},b=document.querySelector(".search-form"),i=document.querySelector(".gallery"),u=document.createElement("div");b.addEventListener("submit",P);async function P(e){e.preventDefault(),d.destroy(),i.innerHTML="",$();const t=new FormData(e.target),{search:o}=Object.fromEntries(t.entries());if(!o.trim()){f(c.info,l.blue),i.innerHTML="";return}const a=await L(o.trim());O(a)&&S(a,i),e.target.reset()}function f(e,t){d.info({position:"topRight",backgroundColor:`${t}`,message:`${e}`})}function $(){u.classList.add("loader"),i.append(u)}function O(e){return typeof e=="string"&&e.indexOf("Exception")!==-1?(f(c.error,l.orange),i.innerHTML="",!1):e&&e.totalHits===0?(f(c.warning,l.red),i.innerHTML="",!1):!0}
//# sourceMappingURL=commonHelpers.js.map
