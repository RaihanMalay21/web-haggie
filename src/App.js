import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./Components/mainPage";
import WhyDelegation from "./Components/kenapaHaggie";
import Harga from "./Components/Harga";
import Kontak from "./Components/kontak";
import AboutOur from "./Components/AboutOur";
import LaporanKeuangan from "./Components/laporanKeuangan";
import LayananPajak from "./Components/LayananPajak";
import ScrollToTop from "./Components/helper/scrollToTop";
import DefaultWhatshapp from "./Components/pageWhatshapp";
import { PageLayananAudit } from "./Components/LayananAudit/page";

function App() {
  return (
      <Router>
        <ScrollToTop/>
        <div>
            <Routes>
              <Route path='/Zofi' element={<Main/>}/>
                <Route path='/Zofi/whyZofi' element={<WhyDelegation/>}/>
                <Route path='/Zofi/harga' element={<Harga/>}/>
                <Route path='/Zofi/kontak' element={<Kontak/>}/>
                <Route path='/Zofi/tentang/kami' element={<AboutOur/>}/>
                <Route path='/Zofi/produk/laporan/keuangan' element={<LaporanKeuangan/>}/>
                <Route path='/Zofi/produk/layanan/pajak' element={<LayananPajak/>}/>
                <Route path='/Zofi/produk/layanan/audit' element={<PageLayananAudit/>} />
            </Routes>
            <DefaultWhatshapp/>
        </div>
      </Router>
  );
}

export default App;
