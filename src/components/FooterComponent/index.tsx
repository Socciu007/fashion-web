import "./style.scss"
import { FacebookOutlined, InstagramOutlined, TikTokOutlined } from "@ant-design/icons"
const FooterComponent = () => {
    return (
            <div className="footer-component__wrapper">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">FASHION STORE</h3>
                        <p className="mb-2">Địa chỉ: 123 Đường ABC, Quận 1</p>
                        <p className="mb-2">TP. Hồ Chí Minh, Việt Nam</p>
                    </div>

                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
                        <p className="mb-2">Email: info@fashionstore.com</p>
                        <p className="mb-2">Hotline: 1900 xxxx</p>
                        <p className="mb-2">Điện thoại: (028) xxxx xxxx</p>
                    </div>

                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Đăng Ký Nhận Tin</h3>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Email của bạn" 
                                className="p-2 text-black rounded-l"
                            />
                            <button className="bg-white text-black px-4 rounded-r hover:bg-gray-200">
                                Gửi
                            </button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Kết Nối</h3>
                        <div className="flex">
                            <a href="#" className="hover:text-gray-400"><FacebookOutlined style={{ fontSize: "16px", color: "#4267B2" }}/> Facebook</a>
                            <a href="#" className="hover:text-gray-400"><InstagramOutlined style={{ fontSize: "16px", color: "#8A3AB9" }} /> Instagram</a>
                            <a href="#" className="hover:text-gray-400"><TikTokOutlined style={{ fontSize: "16px" }} /> TikTok</a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p>&copy; 2024 Fashion Store. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
    )
}

export default FooterComponent
