'use client';

import { ShoppingBag, ShoppingCart, ExternalLink, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { OFFICIAL_STORE_INFO } from '@/constants/storeData';

export default function StoreOrderInfo() {
  const { tokopediaUrl, shopeeUrl, whatsappStore } = OFFICIAL_STORE_INFO;

  return (
    <div className="bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
          BELANJA ONLINE RESMI
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          Tidak dapat berkunjung langsung ke toko? Anda bisa memesan merchandise resmi PERSEKAT TEGAL secara online melalui platform marketplace terpercaya berikut.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Tokopedia */}
        <a
          href={tokopediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between group space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">TOKOPEDIA</h3>
            <p className="text-xs text-neutral-400">Official Store Tokopedia</p>
          </div>
        </a>

        {/* Shopee */}
        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col justify-between group space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">SHOPEE</h3>
            <p className="text-xs text-neutral-400">Official Shop Shopee</p>
          </div>
        </a>
      </div>

      {/* WhatsApp Fast Order */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
          PESANAN CEPAT / CUSTOM ORDER
        </span>
        <Button
          onClick={() => window.open(`https://wa.me/${whatsappStore.replace(/[^0-9]/g, '')}`, '_blank')}
          variant="black"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>HUBUNGI ADMIN WHATSAPP</span>
        </Button>
      </div>
    </div>
  );
}