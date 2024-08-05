import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Icon from "~/acess/svg";

import { useUser } from "~/context/UserContext";
import ModalContainer from "~/components/ModalContainer";

const cn = classNames.bind(styles);

function Login() {
    const { setIsLoginModalOpen } = useUser();

    const handleClose = () => {
        setIsLoginModalOpen(false);
    };
    return (
        <ModalContainer>
            <div className={cn("modal-content")}>
                <div className={cn("page-Wrapper")}>
                    <div className={cn("login-container")}>
                        <div className={cn("home-container")}>
                            <h2 className={cn("H2-title")}>Đăng nhập vào TikTok</h2>
                            <div className={cn("login-ottion-container")}>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.QRIcon}</div>
                                        <div className={cn("text-container")}>Sử dụng mã QR</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.User}</div>
                                        <div className={cn("text-container")}>Số điện thoại / Emal / Tiktok ID</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.FaceBook}</div>
                                        <div className={cn("text-container")}>Tiếp tục với FaceBook</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.Google}</div>
                                        <div className={cn("text-container")}>Tiếp tục với Google</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.Twitter}</div>
                                        <div className={cn("text-container")}>Tiếp tục với Twitter</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.Line}</div>
                                        <div className={cn("text-container")}>Tiếp tục với Line</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={cn("box-container")}>
                                        <div className={cn("Icon-container")}>{Icon.Apple}</div>
                                        <div className={cn("text-container")}>Tiếp tục với Apple</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cn("policy-comfim-tips")}>
                        <p className={cn("tips-text")}>
                            Bằng việc tiếp tục với tài khoản có vị trí hiện tại
                            <a href="/#" className={cn("text-link")}>
                                Việt Nam
                            </a>
                            Bạn đòng ý với
                            <a href="/#" className={cn("text-link")}>
                                Điều khoản sử dụng,{" "}
                            </a>
                            đồng thời bạn xác nhận bạn đã đọc
                            <a href="/#" className={cn("text-link")}>
                                Chính sách và quyền riêng tư{" "}
                            </a>
                            của chúng tôi
                        </p>
                    </div>
                    <div className={cn("bottom-container")}>
                        <div className={cn("bottom-text")}>Bạn không có tài khoản? </div>
                        <a href="/#" className={cn("alink")}>
                            Đăng ký
                        </a>
                    </div>
                </div>

                <div onClick={handleClose} className={cn("close-iner-btn")}>
                    {Icon.Close}
                </div>
            </div>
        </ModalContainer>
    );
}

export default Login;
