import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dataGadai, setDataGadai] = useState([]);

  // Fungsi narik data dari backend
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const result = await response.json();
      setDataGadai(result);
    } catch (error) {
      console.error("Gagal narik data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // Auto-refresh tiap 3 detik biar kelihatan real-time
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white py-3">
          <h4 className="mb-0">📊 Dashboard Estimasi Gadai</h4>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Waktu</th>
                <th>Nama User</th>
                <th>Jenis Barang</th>
                <th>Pertanyaan</th>
                <th>Estimasi Nilai</th>
              </tr>
            </thead>
            <tbody>
              {dataGadai.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    Belum ada transaksi gadai yang berhasil dicatat...
                  </td>
                </tr>
              ) : (
                dataGadai.map((item) => (
                  <tr key={item.id}>
                    <td>{item.waktu}</td>
                    <td><span className="badge bg-secondary">{item.nama_user}</span></td>
                    <td>{item.jenis_barang}</td>
                    <td>{item.pertanyaan}</td>
                    <td className="fw-bold text-success">{item.estimasi}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;