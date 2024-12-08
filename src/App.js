import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
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
                <Route path='/' element={<Main/>}/>
                <Route path='/why' element={<WhyDelegation/>}/>
                <Route path='/harga' element={<Harga/>}/>
                <Route path='/kontak' element={<Kontak/>}/>
                <Route path='/tentang/kami' element={<AboutOur/>}/>
                <Route path='/produk/laporan/keuangan' element={<LaporanKeuangan/>}/>
                <Route path='/produk/layanan/pajak' element={<LayananPajak/>}/>
                <Route path='/produk/layanan/audit' element={<PageLayananAudit/>} />
            </Routes>
            <DefaultWhatshapp/>
        </div>
      </Router>
  );
}

export default App;
