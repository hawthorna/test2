import React from 'react';
import { Guitar as Hospital, Users, ClipboardList, Calendar, Lock, Scale, Building2, FileText, Gavel, PrinterIcon as Prison } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hospital className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">Sistem Pendaftaran Psikiatri Forensik (ePPF)</h1>
                <p className="text-sm">Hospital Permai Johor Bahru</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 hover:bg-blue-600 px-3 py-2 rounded-lg">
                <Lock className="h-5 w-5" />
                <span>Log Masuk</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Detainee Registration Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Prison className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Pendaftaran Tahanan</h2>
            </div>
            <p className="text-gray-600 mb-4">Daftar dan urus maklumat tahanan untuk penilaian psikiatri.</p>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Daftar Tahanan Baru
              </button>
              <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                Senarai Tahanan
              </button>
            </div>
          </div>

          {/* Court Information Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Gavel className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Maklumat Mahkamah</h2>
            </div>
            <p className="text-gray-600 mb-4">Urus maklumat mahkamah dan status perbicaraan.</p>
            <div className="space-y-2">
              <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Daftar Kes Mahkamah
              </button>
              <button className="w-full bg-amber-100 text-amber-700 py-2 rounded-lg hover:bg-amber-200 transition-colors">
                Senarai Kes
              </button>
            </div>
          </div>

          {/* Charges and Notes Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Scale className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Tuduhan & Catatan</h2>
            </div>
            <p className="text-gray-600 mb-4">Rekod tuduhan dan catatan klinikal pesakit.</p>
            <div className="space-y-2">
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Tambah Rekod
              </button>
              <button className="w-full bg-purple-100 text-purple-700 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                Lihat Rekod
              </button>
            </div>
          </div>
        </div>

        {/* Institution Directory */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Direktori Mahkamah</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Mahkamah Tinggi Johor Bahru</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Mahkamah Sesyen Johor Bahru</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Mahkamah Majistret Johor Bahru</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Prison className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Direktori Penjara</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Penjara Johor Bahru</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Penjara Kluang</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <span>Penjara Simpang Renggam</span>
                <span className="text-sm text-gray-500">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mengenai ePPF</h2>
          <p className="text-gray-600 leading-relaxed">
            Sistem Pendaftaran Psikiatri Forensik (ePPF) adalah sistem pengurusan pesakit bersepadu
            untuk Unit Psikiatri Forensik Hospital Permai Johor Bahru. Sistem ini memudahkan proses
            pendaftaran tahanan, pengurusan kes mahkamah, dan penyimpanan rekod pesakit secara digital.
            ePPF menghubungkan institusi kehakiman, penjara, dan perkhidmatan kesihatan mental untuk
            pengurusan kes yang lebih efisien.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            © 2024 Hospital Permai Johor Bahru. Hak Cipta Terpelihara.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
