/* Direct WhatsApp drafts. Following a link never sends a message automatically. */
(()=>{
 'use strict';
 const offers={
  "video-1": {
    "name": {
      "en": "1 TikTok video",
      "id": "1 video TikTok"
    },
    "price": 2500000,
    "quantity": 1,
    "kind": "fixed",
    "anchor": "video-1"
  },
  "video-2": {
    "name": {
      "en": "2 TikTok videos",
      "id": "2 video TikTok"
    },
    "price": 4500000,
    "quantity": 2,
    "kind": "fixed",
    "anchor": "video-2"
  },
  "video-3": {
    "name": {
      "en": "3 TikTok videos",
      "id": "3 video TikTok"
    },
    "price": 6000000,
    "quantity": 3,
    "kind": "fixed",
    "anchor": "video-3"
  },
  "video-4": {
    "name": {
      "en": "4 TikTok videos",
      "id": "4 video TikTok"
    },
    "price": 6500000,
    "quantity": 4,
    "kind": "fixed",
    "anchor": "video-4"
  },
  "video-5": {
    "name": {
      "en": "5 TikTok videos",
      "id": "5 video TikTok"
    },
    "price": 6875000,
    "quantity": 5,
    "kind": "fixed",
    "anchor": "video-5"
  },
  "video-6": {
    "name": {
      "en": "6 TikTok videos",
      "id": "6 video TikTok"
    },
    "price": 7500000,
    "quantity": 6,
    "kind": "fixed",
    "anchor": "video-6"
  },
  "product-photo-story": {
    "name": {
      "en": "Product photo Story",
      "id": "Foto produk di Story"
    },
    "scope": {
      "en": "1 TikTok Story · 24 hours · product photo supplied by the brand",
      "id": "1 TikTok Story · 24 jam · foto produk dari brand"
    },
    "price": 200000,
    "anchor": "product-photo-story",
    "kind": "placement"
  },
  "live-product-visibility": {
    "name": {
      "en": "Product in a LIVE",
      "id": "Produk terlihat saat LIVE"
    },
    "scope": {
      "en": "30,000 cumulative LIVE views · up to 3 sessions within 30 days",
      "id": "Total 30.000 tayangan LIVE · maksimal 3 sesi dalam 30 hari"
    },
    "price": 500000,
    "anchor": "live-product-visibility",
    "kind": "placement"
  },
  "quick-vlog-placement": {
    "name": {
      "en": "A quick vlog appearance",
      "id": "Tampil singkat di vlog"
    },
    "scope": {
      "en": "Up to 3 seconds · no scripted pitch or spoken brand mention",
      "id": "Maksimal 3 detik · tanpa naskah promosi atau penyebutan brand"
    },
    "price": 700000,
    "anchor": "quick-vlog-placement",
    "kind": "placement"
  },
  "product-vlog-placement": {
    "name": {
      "en": "A product moment",
      "id": "Momen produk"
    },
    "scope": {
      "en": "4–5 seconds · product in use, without a spoken brand mention",
      "id": "4–5 detik · produk dipakai, tanpa penyebutan brand"
    },
    "price": 1000000,
    "anchor": "product-vlog-placement",
    "kind": "placement"
  },
  "longer-vlog-placement": {
    "name": {
      "en": "A longer vlog moment",
      "id": "Momen lebih lama di vlog"
    },
    "scope": {
      "en": "6–10 seconds · one agreed brand mention, with a light sales touch",
      "id": "6–10 detik · satu penyebutan brand yang disepakati, promosi ringan"
    },
    "price": 1700000,
    "anchor": "longer-vlog-placement",
    "kind": "placement"
  },
  "story-set": {
    "name": {
      "en": "Story set",
      "id": "Paket Story"
    },
    "scope": {
      "en": "3 product-photo TikTok Stories on 3 agreed days within 14 days. Product-only images; the creator does not appear.",
      "id": "3 TikTok Story foto produk pada 3 hari yang disepakati dalam 14 hari. Hanya foto produk; kreator tidak tampil."
    },
    "price": 500000,
    "anchor": "story-set",
    "kind": "bundle"
  },
  "discovery-pack": {
    "name": {
      "en": "Discovery pack",
      "id": "Paket perkenalan"
    },
    "scope": {
      "en": "1 product-photo Story + one vlog appearance up to 3 seconds + one LIVE visibility package. LIVE target: 30,000 cumulative session views.",
      "id": "1 Story foto produk + satu penempatan vlog maksimal 3 detik + satu paket produk terlihat saat LIVE. Target LIVE: total 30.000 tayangan sesi."
    },
    "price": 1200000,
    "anchor": "discovery-pack",
    "kind": "bundle"
  },
  "more-presence-pack": {
    "name": {
      "en": "More presence",
      "id": "Lebih sering tampil"
    },
    "scope": {
      "en": "2 product-photo Stories + one 6–10 second vlog placement + one LIVE visibility package. LIVE target: 30,000 cumulative session views. Includes one natural spoken brand mention in the vlog.",
      "id": "2 Story foto produk + satu penempatan vlog 6–10 detik + satu paket produk terlihat saat LIVE. Target LIVE: total 30.000 tayangan sesi. Termasuk satu penyebutan brand yang natural di vlog."
    },
    "price": 2300000,
    "anchor": "more-presence-pack",
    "kind": "bundle"
  },
  "live-brand-mentions": {
    "name": {
      "en": "Spoken brand mentions during TikTok LIVE",
      "id": "Penyebutan brand saat TikTok LIVE"
    },
    "kind": "quote",
    "anchor": "live-brand-mentions",
    "scope": {
      "en": "Please quote the session length, number of mentions and product details.",
      "id": "Mohon penawaran sesuai durasi sesi, jumlah penyebutan, dan detail produk."
    }
  },
  "express-upload": {
    "name": {
      "en": "Express upload",
      "id": "Posting cepat"
    },
    "price": 400000,
    "kind": "addon",
    "anchor": "express-upload"
  },
  "additional-revision": {
    "name": {
      "en": "Additional revisions",
      "id": "Revisi tambahan"
    },
    "price": 300000,
    "kind": "addon",
    "anchor": "additional-revision"
  },
  "instagram-story-post": {
    "name": {
      "en": "Instagram Story posting",
      "id": "Posting Instagram Story"
    },
    "price": 800000,
    "kind": "addon",
    "anchor": "instagram-story-post"
  },
  "usage-rights": {
    "name": {
      "en": "Usage rights",
      "id": "Hak penggunaan"
    },
    "price": 500000,
    "kind": "addon",
    "anchor": "usage-rights"
  },
  "reserve-videos": {
    "name": {
      "en": "Reserve a fixed video package",
      "id": "Pesan paket video harga tetap"
    },
    "price": 2500000,
    "kind": "reserved",
    "anchor": "reserve-rate"
  }
};
 const videoPackages=[{"quantity": 1, "price": 2500000}, {"quantity": 2, "price": 4500000}, {"quantity": 3, "price": 6000000}, {"quantity": 4, "price": 6500000}, {"quantity": 5, "price": 6875000}, {"quantity": 6, "price": 7500000}];
 const links=[...document.querySelectorAll('[data-booking-offer]')];
 const reservePicker=document.getElementById('reserve-package');
 const money=(value,lang)=>'Rp'+new Intl.NumberFormat(lang==='id'?'id-ID':'en-US',{maximumFractionDigits:0}).format(value);
 const pageLink=(anchor,lang)=>{
   const url=new URL(location.href);
   url.search='';
   url.searchParams.set('lang',lang);
   url.hash=anchor;
   return url.href;
 };
 const update=()=>{
   const lang=document.documentElement.lang==='id'?'id':'en';
   const id=lang==='id';
   links.forEach(link=>{
     const key=link.dataset.bookingOffer;
     const offer=offers[key];
     if(!offer)return;
     let name=offer.name[lang];
     let price=offer.price;
     let quantity=offer.quantity;
     const reserved=offer.kind==='reserved';
     if(reserved){
       quantity=Number(reservePicker.value);
       price=videoPackages.find(p=>p.quantity===quantity).price;
       name=id?`Pesan awal ${quantity} video TikTok (tarif tetap 90 hari)`:`Reserve ${quantity} TikTok video${quantity===1?'':'s'} (90-day rate protection)`;
     }
     const lines=[id?`Halo, saya tertarik memilih: ${name}.`:`Hi, I'd like to choose: ${name}.`];
     if(price!==undefined){
       const starting=offer.kind==='fixed'||reserved;
       const prefix=offer.kind==='addon'?(id?'Biaya tambahan: ':'Add-on fee: '):(starting?(id?'Total paket mulai: ':'Package total from: '):(id?'Harga: ':'Price: '));
       lines.push(prefix+money(price,lang)+'.');
       if(quantity)lines.push(id?`${quantity} video · mulai ${money(price/quantity,lang)} per video.`:`${quantity} video${quantity===1?'':'s'} · from ${money(price/quantity,lang)} per video.`);
     }else if(offer.kind==='quote'){
       lines.push(id?'Mohon konfirmasi harga.':'Please confirm the quote.');
     }
     if(offer.scope)lines.push(offer.scope[lang]);
     if(reserved)lines.push(id?'Saya ingin membayar di muka untuk mengamankan tarif dan memilih tanggal tayang dalam 90 hari. Pengajuan tanggal minimal 7 hari sebelumnya, sesuai ketersediaan.':'I’d like to prepay to secure the rate and choose release dates within 90 days. Dates requested at least 7 days ahead, subject to availability.');
     lines.push('',id?'Brand / produk saya:':'My brand / product:',id?'Tanggal tayang yang diinginkan:':'Preferred publication date:','',`Media kit: ${pageLink(offer.anchor,lang)}`);
     const url=new URL('https://wa.me/6282324893870');
     url.searchParams.set('text',lines.join('\n'));
     link.href=url.href;
     link.setAttribute('aria-label',(id?'Pilih ':'Choose ')+name+(price!==undefined?' · '+money(price,lang):''));
   });
 };
 reservePicker.addEventListener('change',update);
 window.addEventListener('languagechange',update);
 update();
})();
