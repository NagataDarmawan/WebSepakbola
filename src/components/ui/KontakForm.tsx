'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function KontakForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan Anda telah berhasil terkirim!');
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });
  };

  return (
    <div className="bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
        KIRIM PESAN
      </h2>
      <p className="text-xs sm:text-sm text-neutral-300 mb-6">
        Isi formulir di bawah ini untuk mengirimkan pertanyaan atau pesan Anda.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alamat@email.com"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Subjek
          </label>
          <input
            type="text"
            required
            value={formData.subjek}
            onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
            placeholder="Topik atau judul pesan"
            className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Pesan
          </label>
          <textarea
            rows={5}
            required
            value={formData.pesan}
            onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
            placeholder="Tuliskan pesan Anda secara jelas di sini..."
            className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="black"
          className="w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-black py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
        >
          <Send className="w-4 h-4" />
          <span>KIRIM PESAN</span>
        </Button>
      </form>
    </div>
  );
}