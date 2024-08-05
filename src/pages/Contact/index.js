import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cn = classNames.bind(styles);
function Contact() {
    const contact = [
        {
            id: 1,
            content: [
                {
                    name: "Truy cập Trung tâm Trợ giúp",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgB7Zk9UiMxEIXfbm20CXuCXe0Jlr3BJMTACRhuYE6AOYHhBKMbADGBzQlwQD4TkmESEgJQIzUjT2k0+hlTFMVX9YDSqOVn/bTaBnBzrFQrPQdo4oj/ZcaYK91bfW+UzpVKBPLN0TYzL7pSusAwl1Y/NsamaYxGaWmeCaVt84zaT5QkIiih3+k54hFoZ51mrvD0K62+FbT5IE5NkEAcAnopSZOIGIl26YNMckAMAu1sbCOeqYmdhXSWiDdYof+wELWRj7kZoxjoF21QoF2iPkIMCujtMR/oF21wYvrvIR9pxvpjN35HHrvoT0cCevlJtL+GDgGPsW83/kAedCiWPc8KrCdkyrm+E87jCLsxdwZpVh56nkloU3wZbMFP4+qXa3Dj5Bps0NnUGXAOXVuRXIPXZuDgq8oDG1zYjbkGF+Z36PXm46AzphOJuDxIM8d3cHcWS7jLs9rTt+q+QG6aoRxIJdPM6NB6RmlDeuIYAV2iNWYsLxLxd7EddxwXtlZolCEBEmkGaclu0NaSIiCmQGtuikAk0gwyXE/yfqI72t5vAvpAcfVCe7dEBBJ5BonCMtAnMkZvZjA95R4SFwsjAW2W8htfX5SE6fBQYbBCAhL5Mzgqn/4u3jjvZZDSSdJ1+F4GhdI/JPC1xLl8Gcyl7yYp8UHoM1jhg+A0WOE/xuTQ+82IH6fBEr8xJjkGkw/JX1y9atM4Da7whLFo8Mh/PiCBrkFJP45wOxhYY+dVQ1hjLZGA60t0qXQg8FNVmluq5E2vaS9wx6txhnE+O78xRfi/IXyqEfGByMULfUm7R8a64kEAAAAASUVORK5CYII=",
                    link: [{ name: "support.tiktok.com", url: "https://support.tiktok.com/vi" }],
                },
            ],
        },
        {
            id: 2,
            content: [
                {
                    name: "Đối tác",
                    img: " data:image/png;base64,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",
                    link: [{ name: "Quảng cáo trên TikTok", url: "https://support.tiktok.com/vi" }],
                },
                {
                    name: "Yêu cầu báo chí",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+LFXeJkpACxUgBQohYEtEAAAAFHRSTlMAgL/fn0AgYBCQ78+vMFABcH9vzs+ZFvkAAAIiSURBVGje7drZbqMwFIBh7xtrMmeW93/SEVTFdQwN4BNS0PnvUCt/mAThIDOKoi6TuyuBkzdb3DYAXmo9fQPUpFvpGkBOrIQFYKfXwTAUPMeogiG/AdasuHj5qg0wQ4qPXy+CCSYYH/YBbtOBESDbY2A7HNnPIzVCh8BiOFIT9FNhZ/lC0wek7zxJY8AelpMfQguP9UVw7uY1w/9U8FhwpbBZs7oIkFUMc3iSya/KSJXCCob+zTatGJyvZFJtcOC/v+f6M8EzEUwwwWeDbS2S7gfBN3isPgaWkOWuDfeZ64/6cqk0e/nbiWCCCV4FLzfBTgRIEoa9fEHvZs9OFMN6508YUwQ/n3IYgQqyimb8XBYNG9LZlDnKD/PWLjSwY6Z9+MO5X0UQTPDlYKO35xBgATuSuhi2sKuA8Dzel3nTjCXCu8xdblMOM2e2d+77mGCCLwc7y7eny2EjYU99MexhV8G96+lUDOu3PZ1sJbdXmxPfTgQTTHAsLo/DBthgwuDm4GYW7pFgA0Pt10eOjeeUwjK+mkMofIwWH7K/3NKuOo+6aU+ln5zW6bVQLKYBYcrPR5Mw1OQbMz2CGkfj+X2Wn5CGsRvmlIF37EsdhzjhmI/bdRES+Wiuhtmr6iSMSY9Ax9Gs6TrWdZ3jIdsOnK0tq9rz0hTE0bhX09jSRDGX8UvcXBbw4kR00+xLJx36ETmaFtyxbzPWC+xqdTeMoijq/P0Hm6FJu3Y8zk0AAAAASUVORK5CYII=",
                    link: [{ name: "newsroom.tiktok.com", url: "/newroom" }],
                },
            ],
        },
        {
            id: 3,
            content: [
                {
                    name: "Câu hỏi pháp lý",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAV1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AE8gAArvAErfAEW/ADtbABs1ABCQACwQAAXPAEBwACNNeDH9AAAAEXRSTlMAIIDfv0AQ71+gkE9wMLDPb/v+GPMAAALbSURBVGje7ZjJUuMwAAW1eE+coLAz8//fOSBwkqmH1BZVTnFQnzjk0XHcjsGmUqlUKpUKwbTu0BzurLkxtgmfjLdVz31Y8Lc02+jdwmzz+HBNY/MUaH1Ywf3r0+t9WIHv1oqbVd6H0+n0uMo8rRWvOuDH0wdPYQXNWrELzMvpk7fADGvF3XT0y1H3XohJP3+JX+JZVC7z476s62VphOFaHE/yDHNAfnuk1W+P8M7bQ/Q+xtfAvAifKSN+1n8/vA/38hKYE2040yXie/5zenqReGCOjPHdxkNzGl8frvEwL09rcIk+9v+JLcyL0/Km0z70Sh9oXpzWaEyT6mNY6vEzzovTsvGHRB82ftz9UD7ntM5Xjktm4EvmjL2cO+mDxDzntN6RPlDMc04rIn2AmOecVkT6QDHPOS3pA8QwX5+W9sFinnNa0geIec5pObOgfahY04I5pCV9gBjnnNZB7vuOxJqWzjmtndyKehBLWjCHNqQPEvOc05I+WKxp6ZzT0j5YzHNOS/tAsaalc05L+2CxpqVzTkv7QDHPOS3oQ8SSVlFeO2lD+siJW5onOUha0oeIJS2YQ1rQh4o1LZ3DP+TuOybpQ8UDztNpAY2IfzTXBJBOxGXzH4stiGm+yRHPRXOt0n3PuHQpYpxf6jIJ+szHscO4eH7MPtHbZ25bU07M8zF7HTeZS20n4tJ5rq42cdviby6aS1t8F7HLfUfEMj/CPHPILnGKYjh8d5p4rjSpPyH0HauY53DIMU0deoviGeb8xNhdddA1y2MlEF8egE3X84PMExdcxA/2a+f6oGdexTwHumP4opmcm+LR6lDFPEfzFJRlqGIhOWec7PqdQTHPGTsuE2kFxDhntV9m/lI4i3nOzDvn3F2sk8U8LwfESBVXcRVXcRVXcZIqruLfLrbtwhDF7RlrtsSFNHuzHTZk6M12zPAUazM6n/EezIbYsUnhOlOpVCqVSqWyin8WVJcC86v3IgAAAABJRU5ErkJggg==",
                    link: [
                        {
                            name: "Hướng dẫn Hành pháp",
                            url: "https://www.tiktok.com/legal/page/global/law-enforcement/vi",
                        },
                        {
                            name: "Quyền sở hữu trí tuệ",
                            url: "https://www.tiktok.com/legal/page/global/law-enforcement/vi",
                        },
                    ],
                },
                {
                    name: "Quyền riêng tư",
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAWlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+K1UAAAAAAAAAAAAAAAD/K1T+LFT/KFAAAAAAAAD+LFUAAAAAAAD8KlX/K1b/KFj/KFD+LFQAAAD+LFVgGUfCAAAAHHRSTlMAv4DfIGAB76BA3xDPn5DPgBAwUL9wr2BfICC/4hypnQAAAmhJREFUaN7t2u2S2iAUgGEOH0WERE2Mu23J/d9mZxAXp2NBcoCtu7z/lnHzSBIxakjvm6dGkNYlYZw1aZMar2hoUKR+HOyDYCJ109T+o4GTinETJMkMMBn+ZhUnPckbOgg/QT7vmPUtpFKz9CzV5D5xo6kfqDTfwN7RFefMmT+UsYNf4zhfXaPJ43bXp6WLuzS4MXks7XLpJhR7sRonq4JomA9PPzcoPOFn9uNSYcrC7+h4bhm/FIXZUyfO7JYXXXxPc5LKHeW59J4Gkmws/Yq6hJU4va9NQRjC6Zo+JLIgLN0hzn4gPnduPXn2t4fDMelwhzvcYR/n/l3xiRwsONdoVYDdlBEoVoPdHOMI2FhETCMuPFBR5ITZhizusm/7dTKX7l8xsEF88hAYGDrc4fawuoBoDIePK8MnwMwvL63hybpoc3i2LvFZM+aN4fCFR3tYuLO6wx3ucIc3wCq66cWtp1VgQqNfW45WLqQsHNIkktYECW+uwx3OhbVaaNlm/gSsqbTlG3gK1sZWSU4JeGcrJXUUVrZaNAL7CcuBFm1kbqtRGCJvSdjfiKOw/5WldOYBLFvA8Bfs9sBlVko1hsHeYrwpPNmPxqYwWcKa1hYOd9OIVnCgRwC4KNIWDv2P8Ol4XtfDO8kbxcM/96tr/ytrFA/vV9/+lDOKht/Wj445o2j4EDZ2zhlFw+tdOaOvC5/Dtg45o2j4GDb2njOKhk/hJZIz+soLCCFvh3X9fTzljL72m0SHO9zhB5kkDFvuf/yRarJJmLqHMCiauW40cf9jtUTqjuJKsfSd5VUynKRSUJ5llPR6X7c/tfYHdFLA9zcAAAAASUVORK5CYII=",
                    link: [{ name: "Tìm hiểu thiêm", url: "https://www.tiktok.com/legal/page/row/privacy-policy/vi" }],
                },
            ],
        },
    ];
    return (
        <div>
            <div className={cn("container", "contact-container")}>
                <h1>Liên hệ</h1>
                <div className={cn("contact-wrapper")}>
                    {contact.map((item) => (
                        <div key={item.id} className={cn("contact-row")}>
                            {item.content.map((i, index) => (
                                <div key={index} className={cn("contact-card", `${item.id === 1 && "support"}`)}>
                                    <img alt={i.name} src={i.img} />
                                    <div className={cn("contact-desc")}>
                                        <p>
                                            <strong>{i.name}</strong>
                                        </p>
                                        {i.link.map((data, index) => (
                                            <div key={index}>
                                                <a href={data.url}>{data.name}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
