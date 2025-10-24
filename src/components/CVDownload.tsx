'use client';

import { Download } from 'lucide-react';
import type { Lang, Translations } from '@/lib/content';
import CVDocument from '@/pdf/CVDocument';

export default function CVDownload({ lang, t, data }:{
  lang: Lang; t: Translations[Lang]; data: any;
}){
  const handleDownload = async () => {
    const { pdf } = await import('@react-pdf/renderer');
    const doc = <CVDocument lang={lang} t={t} data={data} />;
    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_IrvinContreras_${lang.toUpperCase()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} className="text-md px-2 py-1 border border-dotted gap-1 rounded-md border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center">
      <Download className="inline h-4 w-4 mr-1" /> {lang === 'es' ? 'CV' : 'CV'}
    </button>
  );
}



