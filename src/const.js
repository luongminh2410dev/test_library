export const multiChoicesData = {
    id: 123123,
    text_label: "Câu 1",
    guide_touch: "Em hãy chọn đáp án đúng hoặc sai",
    content_format: "array",
    question: [
        {
            content: "<p>Để b&oacute;ng đ&egrave;n loại \\(120V - 60W\\)s&aacute;ng b&igrave;nh thường ở mạng điện c&oacute; hiệu điện thế l&agrave; $220V$, người ta phải mắc nối tiếp với b&oacute;ng đ&egrave;n một điện trở c&oacute; gi&aacute; trị:</p>",
            type: "html"
        }
    ],
    solution_suggestion: [
        {
            content: "<p>+ Đọc c&aacute;c th&ocirc;ng số tr&ecirc;n dụng cụ ti&ecirc;u thụ điện</p>\n<p>+ Sử dụng biểu thức t&iacute;nh c&ocirc;ng suất: \\(P = UI\\)</p>\n<p>+ Sử dụng biểu thức định luật &Ocirc;m: \\(I = \\dfrac{U}{R}\\)</p>",
            type: "html"
        }
    ],
    solution_detail: [
        {
            content: "<p>Ta c&oacute;:</p>\n<p>- B&oacute;ng đ&egrave;n loại \\(120V - 60W\\) s&aacute;ng b&igrave;nh thường th&igrave; hiệu điện thế giữa hai đầu b&oacute;ng đ&egrave;n l&agrave; \\(120V\\), cường độ d&ograve;ng điện qua b&oacute;ng đ&egrave;n l&agrave; \\(I = \\dfrac{P}{U} = \\dfrac{{60}}{{120}} = 0,5A\\)</p>\n<p>- Để b&oacute;ng đ&egrave;n s&aacute;ng b&igrave;nh thường ở mạng điện c&oacute; hiệu điện thế l&agrave; \\(220V\\), người ta phải mắc nối tiếp với b&oacute;ng đ&egrave;n một điện trở sao cho hiệu điện thế giữa hai đầu điện trở l&agrave; \\({U_R} = 220 - 120 = 100V\\)</p>\n<p>=&gt; Điện trở cần mắc nối tiếp c&oacute; gi&aacute; trị l&agrave;: \\(R = \\dfrac{{{U_R}}}{I} = \\dfrac{{100}}{{0,5}} = 200\\Omega \\)</p>",
            type: "html"
        }
    ],
    notice: [],
    sdk_type: 1,
    items_per_row: 2,
    options: [
        {
            id: "3",
            option_content: [
                {
                    type: "html",
                    content: "<p>\\(R = 100\\Omega \\)</p>"
                }
            ],
            correct: false,
        },
        {
            id: "4",
            option_content: [
                {
                    type: "html",
                    content: "<p>\\(R = 150\\Omega \\)</p>"
                }
            ],
            correct: false,
        },
        {
            id: "5",
            option_content: [
                {
                    type: "html",
                    content: "<p>\\(R = 200\\Omega \\)</p>"
                }
            ],
            correct: true,
        },
        {
            id: "6",
            option_content: [
                {
                    type: "html",
                    content: "<p>\\(R = 250\\Omega \\)</p>"
                }
            ],
            correct: false,
        }
    ],
    correct_options: ['5'],
    difficult_level: 3,
    // user_answers: ['cky9uzxte000g396xj4la4mp1'] ,
    analytics: {
        correct: 303,
        incorrect: 92,
        skiped: 23,
        total_answer: 418,
        percent_false: 27.511961722488
    },
    spec_question: 1,
}

export const ynQuestion = {
    id: 123123,
    text_label: "Câu 1",
    guide_touch: "Em hãy chọn đáp án đúng hoặc sai",
    content_format: "array",
    question: [
        { type: 'html', content: '<span style="margin-top: 8px; font-size: 16px;">Nội dung sau về tác giả Nguyển Du đúng hay sai?<span>' },
        { type: 'html', content: '<span style="margin-top: 8px; font-size: 16px;">Nguyễn Du chỉ sáng tác bằng chữ hán</span>' }
    ],
    solution_suggestion: [
        { type: 'html', content: '<p>Vài nét về tác giả Nguyễn Du - <a href="#">Xem chi tiết</a></p>' }
    ],
    solution_detail: [
        { type: 'html', content: '- Sai' },
        { type: 'html', content: '- Nguyễn Du sáng tác bằng cả chữ Hán và chữ Nôm' },
    ],
    notice: [],
    sdk_type: 3,
    options: [
        { id: 'cky9uzxte000g396xj4la4mp1', option_content: [{ type: 'html', content: 'Đúng' }] },
        { id: 'cky9uzxte000g396xj4133mp1', option_content: [{ type: 'html', content: 'Sai' }] },
    ],
    correct_options: ['cky9uzxte000g396xj4la4mp1'],
    difficult_level: 2,
    // user_answers: ['cky9uzxte000g396xj4la4mp1'] ,
    spec_question: 1
}

export const textDGNLQuestion = {
    id: "6385feda3a24fad0792f71cd",
    content_format: 'array',
    analytics: {
        correct: 0,
        incorrect: 0,
        skiped: 0,
        total_answer: 0,
        percent_false: 0
    },
    sdk_type: 20,
    difficult_level: 3,
    request_question: [
        {
            type: "html",
            content: "<p><strong>1. Đặt </strong>\\(AM = m\\left( {0 \\le m \\le 2a} \\right)\\)<strong>. T&iacute;nh thể t&iacute;ch khối tứ diện <em>A&rsquo;KID</em> theo a v&agrave; m, trong đ&oacute; <em>I</em> l&agrave; t&acirc;m của h&igrave;nh hộp. T&igrave;m vị tr&iacute; của điểm <em>M</em> để thể t&iacute;ch đ&oacute; đạt gi&aacute; trị lớn nhất.</strong></p>\n<p><strong>2. Khi <em>M</em> l&agrave; trung điểm của <em>AD</em>.</strong></p>\n<p><strong>a) Hỏi thiết diện của h&igrave;nh hộp, cắt bởi mặt phẳng </strong>\\(\\left( {B'CK} \\right)\\)<strong> l&agrave; h&igrave;nh g&igrave;? T&iacute;nh diện t&iacute;ch của thiết diện đ&oacute; theo <em>a</em>.</strong></p>\n<p><strong>b) Chứng minh rẳng đường thẳng <em>B&rsquo;M</em> tiếp x&uacute;c với mặt cầu đường k&iacute;nh <em>AA&rsquo;</em>.</strong></p>"
        }
    ],
    question: [
        {
            type: "html",
            content: "<p>Cho h&igrave;nh hộp chữ nhật <em>ABCD.A&rsquo;B&rsquo;C&rsquo;D&rsquo;</em> (<em>AA&rsquo;, BB&rsquo;, CC&rsquo;, DD&rsquo;</em> song song v&agrave; <em>AC</em> l&agrave; đường ch&eacute;o của h&igrave;nh chữ nhật <em>ABCD</em>) c&oacute; \\(AB = a\\), \\(AD = 2a\\), \\(AA' = a\\sqrt 2 \\). <em>M</em> l&agrave; một điểm thuộc đoạn <em>AD</em>, <em>K</em> l&agrave; trung điểm của <em>B&rsquo;M</em>.</p>"
        }
    ],
    solution_suggestion: [
        {
            type: "html",
            content: "<p><strong>1.</strong></p>\n<p>-Mặt phẳng \\(\\left( {KID} \\right)\\) tr&ugrave;ng với mặt phẳng \\(\\left( {AB'C'D} \\right)\\)</p>\n<p>-T&iacute;nh \\(h = d\\left( {A',\\left( {KID} \\right)} \\right) = d\\left( {A',\\left( {AB'C'D} \\right)} \\right) = A'H\\)</p>\n<p>-T&iacute;nh \\({S_{\\Delta B'MD}}\\).</p>\n<p>-\\({S_{\\Delta DIK}} = \\dfrac{1}{4}{S_{\\Delta B'MD}}\\)</p>\n<p>-\\({V_{A'KID}} = \\dfrac{1}{3}.{S_{\\Delta DIK}}.A'H\\)</p>\n<p><strong>2.</strong></p>\n<p><strong>a)</strong> T&igrave;m tất cả c&aacute;c giao tuyến của \\(\\left( {B'CK} \\right)\\) v&agrave; c&aacute;c mặt của h&igrave;nh hộp.</p>\n<p><strong>b)</strong> Chứng minh \\(d\\left( {N,B'M} \\right) = \\dfrac{{AA'}}{2}\\).</p>"
        }
    ],
    solution_detail: [
        {
            type: "html",
            content: "<p><strong>1. T&igrave;m vị tr&iacute; của điểm M để thể t&iacute;ch A&rsquo;KID đạt gi&aacute; trị lớn nhất.</strong></p>\n<p><strong><img src=\"https://cdn.vungoi.vn/vungoi/2022/1129/1669725815811_mceclip0.png\" width=\"321\" /></strong></p>"
        },
        {
            type: "html",
            content: "<p>Ta c&oacute; mặt phẳng \\(\\left( {KID} \\right)\\) tr&ugrave;ng với mặt phẳng \\(\\left( {AB'C'D} \\right)\\)</p>\n<p>Dựng \\(A'H \\bot AB'\\)&nbsp;&nbsp; (1)</p>\n<p>Ta c&oacute;: \\(DA \\bot \\left( {ABB'A'} \\right)\\) \\( \\Rightarrow DA \\bot A'H\\)&nbsp;&nbsp; (2)</p>\n<p>Từ (1) v&agrave; (2) \\( \\Rightarrow A'H \\bot \\left( {AB'C'D} \\right)\\) n&ecirc;n \\(A'H = h\\) ch&iacute;nh l&agrave; khoảng c&aacute;ch từ A&rsquo; đến \\(\\left( {AB'C'D} \\right)\\).</p>\n<p>Trong \\(\\Delta AA'B'\\) vu&ocirc;ng tại A&rsquo;, đường cao A&rsquo;H:</p>\n<p>\\(\\dfrac{1}{{A'{H^2}}} = \\dfrac{1}{{A'{A^2}}} + \\dfrac{1}{{A'B{'^2}}}\\)</p>\n<p>\\( \\Rightarrow \\dfrac{1}{{{h^2}}} = \\dfrac{1}{{2{a^2}}} + \\dfrac{1}{{{a^2}}} = \\dfrac{3}{{2{a^2}}} \\Rightarrow h = \\dfrac{{a\\sqrt 6 }}{3}\\)</p>\n<p>Ta c&oacute;: \\({S_{\\Delta DIK}} = {S_{\\Delta B'KI}} = \\dfrac{1}{4}{S_{\\Delta B'MD}}\\)</p>\n<p>\\(\\dfrac{{{S_{\\Delta B'MD}}}}{{{S_{\\Delta AB'D}}}} = \\dfrac{{\\dfrac{1}{2}MD.B'D.\\sin \\widehat {MDB'}}}{{\\dfrac{1}{2}AD.B'D.\\sin \\widehat {MDB'}}} = \\dfrac{{2a - m}}{{2a}}\\)</p>\n<p>\\( \\Rightarrow {S_{\\Delta B'MD}} = \\dfrac{{2a - m}}{{2a}}{S_{\\Delta AB'D}}\\)</p>\n<p>\\({S_{\\Delta AB'D}} = \\dfrac{1}{2}AD.AB' = \\dfrac{1}{2}.2a.\\sqrt {2{a^2} + {a^2}}&nbsp; = {a^2}\\sqrt 3 \\)</p>\n<p>\\( \\Rightarrow {S_{\\Delta DIK}} = \\dfrac{1}{4}{S_{\\Delta B'MD}} = \\dfrac{1}{4}.\\dfrac{{2a - m}}{{2a}}{S_{\\Delta AB'D}} = \\dfrac{{a\\sqrt 3 \\left( {2a - m} \\right)}}{8}\\)</p>\n<p>Thể t&iacute;ch của tứ diện A&rsquo;KID l&agrave;:</p>\n<p>\\({V_{A'KID}} = \\dfrac{1}{3}.{S_{\\Delta DIK}}.A'H = \\dfrac{1}{3}.\\dfrac{{a\\sqrt 3 \\left( {2a - m} \\right)}}{8}.\\dfrac{{a\\sqrt 6 }}{3} = \\dfrac{{{a^2}\\left( {2a - m} \\right)\\sqrt 2 }}{{24}}\\)</p>\n<p>\\({V_{A'KID}}\\) đạt gi&aacute; trị lớn nhất \\( \\Leftrightarrow 2a - m\\) đạt gi&aacute; trị lớn nhất.</p>\n<p>Do \\(0 \\le m \\le 2a\\) n&ecirc;n \\({V_{A'KID}}\\) đạt gi&aacute; trị lớn nhất \\( \\Leftrightarrow m = 0\\). Khi đ&oacute; M ch&iacute;nh l&agrave; điểm A.</p>\n<p><strong>2.</strong></p>\n<p><strong>a)</strong></p>"
        },
        {
            type: "html",
            content: "<p><img src=\"https://cdn.vungoi.vn/vungoi/2022/1129/1669725857604_mceclip0.png\" /></p>"
        },
        {
            type: "html",
            content: "<p>\\(BC\\parallel \\left( {AA'D'D} \\right)\\) n&ecirc;n mặt phẳng \\(\\left( {B'KC} \\right)\\) cắt mặt phẳng \\(\\left( {AA'D'D} \\right)\\) theo giao tuyến \\(MN\\parallel A'D\\).</p>\n<p>V&igrave; M l&agrave; trung điểm của AD\\( \\Rightarrow \\)N l&agrave; trung điểm của AA&rsquo;</p>\n<p>Thiết diện của h&igrave;nh hộp cắt bởi mặt phẳng \\(\\left( {B'KC} \\right)\\) l&agrave; h&igrave;nh thang B&rsquo;CMN.</p>\n<p>\\(BM \\bot MC,B'B \\bot \\left( {ABCD} \\right) \\Rightarrow B'M \\bot MC\\)</p>\n<p>Đường cao \\(ML = h\\) của \\(\\Delta B'MC\\) vu&ocirc;ng tại M cũng l&agrave; đường cao của h&igrave;nh thang B&rsquo;CMN.</p>\n<p>Ta c&oacute;:</p>\n<p>\\(MC = a\\sqrt 2 \\)</p>\n<p>\\(B'{M^2} = B'{B^2} + B{M^2} = B'{B^2} + A{B^2} + A{M^2} = 2{a^2} + {a^2} + {a^2} = 4{a^2}\\)</p>\n<p>\\(\\Delta B'MC\\) vu&ocirc;ng tại M n&ecirc;n:</p>\n<p>\\(\\dfrac{1}{{M{L^2}}} = \\dfrac{1}{{B'{M^2}}} + \\dfrac{1}{{M{C^2}}} = \\dfrac{1}{{4{a^2}}} + \\dfrac{1}{{2{a^2}}} \\Rightarrow ML = \\dfrac{{2a}}{{\\sqrt 3 }}\\)</p>\n<p>Diện t&iacute;ch thiết diện B&rsquo;CMN l&agrave;:</p>\n<p>\\({S_{B'CMN}} = \\dfrac{1}{2}\\left( {B'C + MN} \\right).ML = \\dfrac{1}{2}\\left( {a\\sqrt 6&nbsp; + \\dfrac{{a\\sqrt 6 }}{2}} \\right).\\dfrac{{2a}}{{\\sqrt 3 }} = \\dfrac{{3{a^2}\\sqrt 2 }}{2}\\)</p>\n<p><strong>b)</strong></p>\n<p>\\({S_{\\Delta B'MN}} = {S_{B'CMN}} - {S_{\\Delta B'MC}} = \\dfrac{{3{a^2}\\sqrt 2 }}{2} - \\dfrac{1}{2}B'M.MC\\)</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\( = \\dfrac{{3{a^2}\\sqrt 2 }}{2} - \\dfrac{1}{2}.2a.a\\sqrt 2&nbsp; = \\dfrac{{{a^2}\\sqrt 2 }}{2}\\)</p>\n<p>Gọi d l&agrave; khoảng c&aacute;ch từ N đến đường thẳng B&rsquo;M.</p>\n<p>\\(d = \\dfrac{{2{S_{B'MN}}}}{{B'M}} = \\dfrac{{{a^2}\\sqrt 2 }}{{2a}} = \\dfrac{{a\\sqrt 2 }}{2} = \\dfrac{{AA'}}{2}\\)</p>\n<p>Do đ&oacute; mặt cầu đường k&iacute;nh AA&rsquo; tiếp x&uacute;c với đường thẳng B&rsquo;M.</p>"
        }
    ],
    notice: [],
    correct_options: ['458'],
}

export const paringQuestion = {
    id: "61f2638d11732e225b0c7cec",
    analytics: {
        correct: 0,
        incorrect: 0,
        skiped: 0,
        total_answer: 0,
        percent_false: 0
    },
    solution_detail: [
        {
            type: "html",
            content: "<p style=\"text-align: justify;\">Đồng hồ hiện 19 giờ hay ch&iacute;nh l&agrave; 7 giờ tối</p>\n<p style=\"text-align: justify;\">Đồng hồ hiện 14 giờ 30 ph&uacute;t hay ch&iacute;nh l&agrave; 2 giờ 30 ph&uacute;t chiều</p>\n<p style=\"text-align: justify;\">Đồng hồ hiện 18 giờ 15 ph&uacute;t hay ch&iacute;nh l&agrave; 6 giờ 15 ph&uacute;t tối</p>"
        },
        {
            type: "html",
            content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643275069219_anh_34.jpg\" width=\"190\" height=\"200\" /></p>"
        }
    ],
    solution_suggestion: [
        {
            type: "html",
            content: "<p style=\"text-align: justify;\">Em ghi nhớ kiến thức về c&aacute;c giờ trong ng&agrave;y v&agrave; nối c&aacute;c đồng hồ c&ugrave;ng chỉ một giờ lại với nhau.</p>"
        }
    ],
    sdk_type: 4,
    difficult_level: 3,
    notice: [],
    content_format: "array",
    guide_touch: "Con hãy chạm vào 2 miếng ghép màu xanh và màu cam để tạo thành đáp án đúng",
    question: [
        {
            type: "html",
            content: "<p style=\"text-align: center;\">Nối c&aacute;c đồng hồ c&ugrave;ng chỉ một thời gian với nhau:</p>"
        },
        {
            type: "image",
            url: "https://cdn.vungoi.vn/vungoi/2022/0127/1643274808939_anh_25_ds.png",
            caption: "",
            optUpload: 2,
            width: "200",
            height: "200",
            quantity: 1
        }
    ],
    options: {
        targets: [
            {
                id: "answer_ckywraioy000g396xdxum0d6x",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274847009_anh_29.png\" alt=\"\" width=\"122\" height=\"80\" /></p>"
                    }
                ],
                answer: {
                    index: 2
                }
            },
            {
                id: "answer_ckywrdflj000v396x3v2pkqhd",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274870542_anh_30.png\" alt=\"\" width=\"117\" height=\"80\" /></p>"
                    }
                ],
                answer: {
                    index: 0
                }
            },
            {
                id: "answer_ckywrdhus001a396xiyjrnmer",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274889567_anh_32.png\" alt=\"\" width=\"116\" height=\"80\" /></p>"
                    }
                ],
                answer: {
                    index: 1
                }
            }
        ],
        sources: [
            {
                id: "answer_ckywraioy000h396xng9c3z3x",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274917366_anh_33.png\" alt=\"\" width=\"136\" height=\"120\" /></p>"
                    }
                ],
                index: 0
            },
            {
                id: "answer_ckywrdjec001r396xs7exuaxe",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274939626_anh_28.png\" alt=\"\" width=\"130\" height=\"120\" /></p>"
                    }
                ],
                index: 1
            },
            {
                id: "answer_ckywrdk8n0029396x2yrbhj6g",
                option_content: [
                    {
                        type: "html",
                        content: "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/2022/0127/1643274956900_anh_31.png\" alt=\"\" width=\"124\" height=\"120\" /></p>"
                    }
                ],
                index: 2
            }
        ]
    },
    correct_options: [
        {
            id: "answer_ckywraioy000g396xdxum0d6x",
            answer: 2
        },
        {
            id: "answer_ckywrdflj000v396x3v2pkqhd",
            answer: 0
        },
        {
            id: "answer_ckywrdhus001a396xiyjrnmer",
            answer: 1
        }
    ]
}

export const phraseQuestion = {
    id: "6200e7db77e73fc854d3e9f6",
    analytics: {
        correct: 0,
        incorrect: 0,
        skiped: 0,
        total_answer: 0,
        percent_false: 0
    },
    solution_detail: [
        {
            type: "html",
            content: "<p style=\"text-align: justify;\">a. Người dân Việt Nam lao động rất <strong>cần cù.</strong></p>\n<p style=\"text-align: justify;\">b. Các chú bộ đội chiến đấu <strong>anh dũng</strong> để bảo vệ Tổ quốc.</p>\n<p style=\"text-align: justify;\">c. Người Việt Nam luôn <strong>thân thiện</strong> với du khách nước ngoài.</p>"
        }
    ],
    solution_suggestion: [
        {
            type: "html",
            content: "<p style=\"text-align: justify;\">- anh dũng: không sợ khó khăn và nguy hiểm khi làm những việc cao đẹp.</p>\n<p style=\"text-align: justify;\">- cần cù: chăm chỉ, chịu khó làm một cách thường xuyên</p>\n<p style=\"text-align: justify;\">- thân thiện: thể hiện sự tử tế và có thiện cảm với nhau.</p>"
        }
    ],
    sdk_type: 5,
    difficult_level: 3,
    notice: [],
    content_format: "array",
    guide_touch: "Con hãy bấm vào từ/cụm từ sau đó bấm chọn ô trống thích hợp để hoàn thành câu/đoạn văn",
    question: [
        {
            type: "html",
            content: "<p style=\"text-align: center;\"><strong>Chọn từ ngữ phù hợp để hoàn thiện các câu sau:</strong></p>"
        },
        {
            type: "image",
            url: "https://cdn.vungoi.vn/vungoi/2022/0207/1644226200528_anh_67_ds.png",
            caption: "",
            optUpload: 2,
            width: 300,
            height: 200,
            quantity: 1
        }
    ],
    options: {
        phrases: [
            {
                id: "answer_ckzchsa0p000g396xv43zcdq5",
                content: "anh dũng",
            },
            {
                id: "answer_ckzchsa0p000h396xgk4bc0yl",
                content: "thân thiện",
            },
            {
                id: "answer_ckzchsa0p000i396xf01p6g3m",
                content: "cần cù",
            }
        ],
        sentences: [
            {
                id: "answer_ckzchsa0p000j396xav9ngfur",
                content: "a. Người dân Việt Nam lao động rất ",
                type: "richText",
                optionTypeIndex: 0
            },
            {
                id: "answer_ckzchu99f001p396xcunqn6ak",
                content: "cần cù",
                type: "boxText",
                optionTypeIndex: 1,
            },
            {
                id: "answer_ckzchudll002l396xeoo1r78e",
                content: ".",
                type: "richText",
                optionTypeIndex: 0,
            },
            {
                id: "answer_ckzchuzw10044396xw148wlm5",
                breakDown: [],
                type: "breakDown",
                optionTypeIndex: 8,
            },
            {
                id: "answer_ckzchvci9004q396xrvjsd6r1",
                content: "b. Các chú bộ đội chiến đấu ",
                type: "richText",
                optionTypeIndex: 0,
            },
            {
                id: "answer_ckzchvefl005f396x9deofr6t",
                content: "anh dũng",
                type: "boxText",
                optionTypeIndex: 1,
            },
            {
                id: "answer_ckzchvgeh0067396x4lfybgan",
                content: "để bảo vệ Tổ quốc.",
                type: "richText",
                optionTypeIndex: 0,
            },
            {
                id: "answer_ckzchwsmz008e396x9tzgeof1",
                breakDown: [],
                type: "breakDown",
                optionTypeIndex: 8,
            },
            {
                id: "answer_ckzchwujd009d396x64sl0psa",
                content: "c. Người Việt Nam luôn ",
                type: "richText",
                optionTypeIndex: 0,
            },
            {
                id: "answer_ckzchwwlt00af396xesj230tq",
                content: "thân thiện",
                type: "boxText",
                optionTypeIndex: 1,
            },
            {
                id: "answer_ckzchxcbe00co396xat0vxo8w",
                content: "với du khách",
                type: "richText",
                optionTypeIndex: 0,
            },
            {
                id: "answer_ckzchza9m00ja396x0o55s1ih",
                content: "nước ngoài.",
                type: "richText",
                optionTypeIndex: 0,
            }
        ]
    },
    correct_options: [
        {
            id: "answer_ckzchu99f001p396xcunqn6ak",
            answer: "cần cù"
        },
        {
            id: "answer_ckzchvefl005f396x9deofr6t",
            answer: "anh dũng"
        },
        {
            id: "answer_ckzchwwlt00af396xesj230tq",
            answer: "thân thiện"
        }
    ]
}

export const compoundQuestion = {
    id: "608952892d6921a7b18deab1",
    sdk_type: 2,
    question: {
        id: "cko1f4bdi0007356vr3u9pbd0",
        content: [
            {
                type: "html",
                content: "<p><strong>Đọc văn bản sau v&agrave; thực hiện y&ecirc;u cầu ở ph&iacute;a dưới:</strong></p>\n<p style=\"text-align: center;\"><strong>B&Ocirc;NG S&Uacute;NG V&Agrave; SI&Ecirc;U B&Atilde;O</strong></p>\n<p style=\"text-align: right;\">-Thanh Thảo-</p>\n<p style=\"padding-left: 90px;\"><em>b&ocirc;ng s&uacute;ng t&iacute;m mọc l&ecirc;n từ nước</em></p>\n<p style=\"padding-left: 90px;\"><em>b&atilde;o Haiyan mọc l&ecirc;n từ biển</em></p>\n<p style=\"padding-left: 90px;\"><em>b&atilde;o Haiyan cho t&ocirc;i kinh ho&agrave;ng</em></p>\n<p style=\"padding-left: 90px;\"><em>b&ocirc;ng s&uacute;ng t&iacute;m cho t&ocirc;i b&igrave;nh y&ecirc;n</em></p>\n<p style=\"padding-left: 90px;\"><em>rồi c&oacute; thể người ta qu&ecirc;n m&agrave; nhớ</em></p>\n<p style=\"padding-left: 90px;\"><em>trong si&ecirc;u b&atilde;o một b&ocirc;ng s&uacute;ng nở</em></p>\n<p style=\"padding-left: 90px;\"><em>b&ocirc;ng s&uacute;ng ấy m&agrave;u t&iacute;m</em></p>\n<p style=\"padding-left: 90px;\"><em>b&atilde;o Haiyan m&agrave;u g&igrave;?</em></p>\n<p style=\"text-align: right;\">(B&aacute;o Thanh ni&ecirc;n Chủ nhật, 17/11/2013)</p>"
            }
        ],
        sub_questions: [
            {
                id: "cko1f4bdi0008356v4rte4wne",
                sdk_type: 1,
                difficult_level: 1,
                solution_suggestion: [
                    {
                        type: "html",
                        content: "<p>Dựa v&agrave;o c&aacute;c phương thức biểu đạt đ&atilde; học</p>"
                    }
                ],
                solution_detail: [
                    {
                        type: "html",
                        content: "<p>Phương thức biểu đạt ch&iacute;nh: biểu cảm</p>"
                    }
                ],
                notice: [],
                question: [
                    {
                        type: "html",
                        content: "<p>Phương thức biểu đạt ch&iacute;nh của văn bản?</p>"
                    }
                ],
                options: [
                    {
                        id: "cko1f4bdi000a356vjlaqoyt4",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Tự sự</p>"
                            }
                        ],
                        answer_key: "a",
                        correct: false,
                        question_child: "cko1f4bdi0009356v0xd94ohj"
                    },
                    {
                        id: "cko1f4bdi000b356vs0ssbl6i",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Mi&ecirc;u tả</p>"
                            }
                        ],
                        answer_key: "b",
                        correct: false,
                        question_child: "cko1f4bdi0009356v0xd94ohj"
                    },
                    {
                        id: "cko1f4bdi000c356vvr3mcvl5",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Biểu cảm</p>"
                            }
                        ],
                        answer_key: "c",
                        correct: true,
                        question_child: "cko1f4bdi0009356v0xd94ohj"
                    },
                    {
                        id: "cko1f4bdi000d356v4y2kform",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Nghị luận</p>"
                            }
                        ],
                        answer_key: "d",
                        correct: false,
                        question_child: "cko1f4bdi0009356v0xd94ohj"
                    }
                ],
                correct_options: ['cko1f4bdi000c356vvr3mcvl5'],
                parent_id: "cko1f4bdi0007356vr3u9pbd0",
                _id: "608952892d6921a7b18deab4"
            },
            {
                id: "cko1f4bdi000e356veaddrh2u",
                sdk_type: 1,
                difficult_level: 1,
                solution_suggestion: [
                    {
                        type: "html",
                        content: "<p>Dựa v&agrave;o c&aacute;c phong c&aacute;ch ng&ocirc;n ngữ đ&atilde; học</p>"
                    }
                ],
                solution_detail: [
                    {
                        type: "html",
                        content: "<p>Văn bản tr&ecirc;n thuộc phong c&aacute;ch ng&ocirc;n ngữ nghệ thuật.</p>"
                    }
                ],
                notice: [],
                question: [
                    {
                        type: "html",
                        content: "<p>Văn bản tr&ecirc;n thuộc phong c&aacute;ch nghệ thuật n&agrave;o?</p>"
                    }
                ],
                options: [
                    {
                        id: "cko1f4bdi000g356vsn3fxzl4",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Nghệ thuật</p>"
                            }
                        ],
                        answer_key: "a",
                        correct: true,
                        question_child: "cko1f4bdi000f356vugbkg0yb"
                    },
                    {
                        id: "cko1f4bdi000h356v69xfgsyx",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>B&aacute;o ch&iacute;</p>"
                            }
                        ],
                        answer_key: "b",
                        correct: false,
                        question_child: "cko1f4bdi000f356vugbkg0yb"
                    },
                    {
                        id: "cko1f4bdi000i356vqcvtr7gz",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Ch&iacute;nh luận</p>"
                            }
                        ],
                        answer_key: "c",
                        correct: false,
                        question_child: "cko1f4bdi000f356vugbkg0yb"
                    },
                    {
                        id: "cko1f4bdi000j356vs9q4qpwl",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Khoa hoa</p>"
                            }
                        ],
                        answer_key: "d",
                        correct: false,
                        question_child: "cko1f4bdi000f356vugbkg0yb"
                    }
                ],
                correct_options: ['cko1f4bdi000g356vsn3fxzl4'],
                parent_id: "cko1f4bdi0007356vr3u9pbd0",
                _id: "608952892d6921a7b18deab5"
            },
            {
                id: "cko1f7vmy000m356vwgloltak",
                sdk_type: 1,
                difficult_level: 2,
                solution_suggestion: [
                    {
                        type: "html",
                        content: "<p>Xem lại nội dung văn bản</p>"
                    }
                ],
                solution_detail: [
                    {
                        type: "html",
                        content: "<p>H&igrave;nh ảnh &ldquo;b&ocirc;ng s&uacute;ng&rdquo; tượng trưng cho c&aacute;i đẹp, sự sống v&agrave; b&igrave;nh y&ecirc;n</p>"
                    }
                ],
                notice: [],
                question: [
                    {
                        type: "html",
                        content: "<p>H&igrave;nh ảnh &ldquo;b&ocirc;ng s&uacute;ng&rdquo; trong văn bản tr&ecirc;n l&agrave; h&igrave;nh ảnh tượng trưng cho điều g&igrave;?</p>"
                    }
                ],
                options: [
                    {
                        id: "cko1f7vmy000o356vw6w519cw",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Tượng trưng cho chiến tranh</p>"
                            }
                        ],
                        answer_key: "a",
                        correct: false,
                        question_child: "cko1f7vmy000n356vqoh27oz4"
                    },
                    {
                        id: "cko1f7vmy000p356vbylgmtvj",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Tượng trưng cho c&aacute;i đẹp, sự sống v&agrave; b&igrave;nh y&ecirc;n</p>"
                            }
                        ],
                        answer_key: "b",
                        correct: true,
                        question_child: "cko1f7vmy000n356vqoh27oz4"
                    },
                    {
                        id: "cko1f7vmy000q356vukmed2kq",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Tượng trưng cho sự sinh s&ocirc;i, ph&aacute;t triển</p>"
                            }
                        ],
                        answer_key: "c",
                        correct: false,
                        question_child: "cko1f7vmy000n356vqoh27oz4"
                    },
                    {
                        id: "cko1f7vmy000r356vy74rucvr",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Tượng trưng cho t&igrave;nh y&ecirc;u</p>"
                            }
                        ],
                        answer_key: "d",
                        correct: false,
                        question_child: "cko1f7vmy000n356vqoh27oz4"
                    }
                ],
                correct_options: ['cko1f7vmy000p356vbylgmtvj'],
                parent_id: "cko1f4bdi0007356vr3u9pbd0",
                _id: "608952892d6921a7b18deab6"
            },
            {
                id: "cko1f8tfz0016356vcw6lalwk",
                sdk_type: 1,
                difficult_level: 2,
                solution_suggestion: [
                    {
                        type: "html",
                        content: "<p>Xem lại c&aacute;c biện ph&aacute;p nghệ thuật đ&atilde; học</p>"
                    }
                ],
                solution_detail: [
                    {
                        type: "html",
                        content: "<p style=\"text-align: center;\"><em>b&atilde;o Haiyan m&agrave;u g&igrave;?</em></p>\n<p>Nghệ thuật: c&acirc;u hỏi tu từ</p>\n<p>T&aacute;c dụng:</p>\n<p>+ Khắc s&acirc;u b&atilde;o Haiyan l&agrave; những bất trắc, tai ương,&hellip;kh&ocirc;ng c&oacute; m&agrave;u sắc, h&igrave;nh th&ugrave; cụ thể n&ecirc;n rất kh&oacute; lường</p>\n<p>+ Diễn tả những băn khoăn, trăn trở của t&aacute;c giả, đồng thời cảnh b&aacute;o tai ương, bất trắc trong cuộc sống l&agrave; kh&ocirc;n lường.</p>\n<p>+ Tạo ra c&aacute;i kết mở, gợi ra nhiều li&ecirc;n tưởng, suy nghĩ cho người đọc.</p>"
                    }
                ],
                notice: [],
                question: [
                    {
                        type: "html",
                        content: "<p>C&acirc;u thơ cuối của văn bản tr&ecirc;n sử dụng biện ph&aacute;p nghệ thuật g&igrave;?</p>"
                    }
                ],
                options: [
                    {
                        id: "cko1f8tfz0018356vj97a8pkx",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>So s&aacute;nh</p>"
                            }
                        ],
                        answer_key: "a",
                        correct: false,
                        question_child: "cko1f8tfz0017356vqput3l7x"
                    },
                    {
                        id: "cko1f8tfz0019356v6skyvcup",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Điệp từ</p>"
                            }
                        ],
                        answer_key: "b",
                        correct: false,
                        question_child: "cko1f8tfz0017356vqput3l7x"
                    },
                    {
                        id: "cko1f8tfz001a356varkwrkbg",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Ho&aacute;n dụ</p>"
                            }
                        ],
                        answer_key: "c",
                        correct: false,
                        question_child: "cko1f8tfz0017356vqput3l7x"
                    },
                    {
                        id: "cko1f8tfz001b356vszyvlzdo",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>C&acirc;u hỏi tu từ</p>"
                            }
                        ],
                        answer_key: "d",
                        correct: true,
                        question_child: "cko1f8tfz0017356vqput3l7x"
                    }
                ],
                correct_options: ['cko1f8tfz001b356vszyvlzdo'],
                parent_id: "cko1f4bdi0007356vr3u9pbd0",
                _id: "608952892d6921a7b18deab7"
            },
            {
                id: "cko1fa3s2001q356vly8ll3p7",
                sdk_type: 1,
                difficult_level: 3,
                solution_suggestion: [
                    {
                        type: "html",
                        content: "<p>Xem lại nội dung văn bản</p>"
                    }
                ],
                solution_detail: [
                    {
                        type: "html",
                        content: "<p>Văn bản tr&ecirc;n mang nhiều th&ocirc;ng điệp &yacute; nghĩa:</p>\n<p>- Sự sống nảy sinh từ c&aacute;i chết</p>\n<p>- Sống l&agrave; dũng cảm đương đầu với những kh&oacute; khăn, thử th&aacute;ch</p>\n<p>- Cuộc sống lu&ocirc;n tiềm ẩn những hiểm họa, kh&oacute; khăn kh&oacute; lường</p>"
                    }
                ],
                notice: [],
                question: [
                    {
                        type: "html",
                        content: "<p>Th&ocirc;ng điệp n&agrave;o dưới đ&acirc;y kh&ocirc;ng ph&ugrave; hợp với văn bản tr&ecirc;n?</p>"
                    }
                ],
                options: [
                    {
                        id: "cko1fa3s2001s356vzpgxc1pl",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Sự sống nảy sinh từ c&aacute;i chết</p>"
                            }
                        ],
                        answer_key: "a",
                        correct: false,
                        question_child: "cko1fa3s2001r356vf1un14zl"
                    },
                    {
                        id: "cko1fa3s3001t356v3o19ma6n",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Sống l&agrave; dũng cảm đương đầu với những kh&oacute; khăn, thử th&aacute;ch</p>"
                            }
                        ],
                        answer_key: "b",
                        correct: false,
                        question_child: "cko1fa3s2001r356vf1un14zl"
                    },
                    {
                        id: "cko1fa3s3001u356vlej4lh7q",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Sống phải khuất phục trước c&aacute;i đẹp</p>"
                            }
                        ],
                        answer_key: "c",
                        correct: true,
                        question_child: "cko1fa3s2001r356vf1un14zl"
                    },
                    {
                        id: "cko1fa3s3001v356vybeiwcuk",
                        option_content: [
                            {
                                type: "html",
                                content: "<p>Cuộc sống lu&ocirc;n tiềm ẩn những hiểm họa, kh&oacute; khăn kh&oacute; lường</p>"
                            }
                        ],
                        answer_key: "d",
                        correct: false,
                        question_child: "cko1fa3s2001r356vf1un14zl"
                    }
                ],
                correct_options: ['cko1fa3s3001u356vlej4lh7q'],
                parent_id: "cko1f4bdi0007356vr3u9pbd0",
                _id: "608952892d6921a7b18deab8"
            }
        ],
        quiz: "cko1f4bdi0006356ve72oj4mz"
    },
    idx: 104388,
    spec_question: 1,
}

export const sortQuestion = {
    "id": "6200ecde77e73fc854d3ea0c",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\">C&acirc;u ho&agrave;n chỉnh như sau:</p>\n<p style=\"text-align: center;\">Em muốn kể lại việc B&aacute;c Hồ trồng chiếc rễ đa trong vườn theo một c&aacute;ch đặc biệt.</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Em l&agrave;m theo y&ecirc;u cầu của b&agrave;i tập.</p>"
        }
    ],
    "guide_touch": "Con hãy kéo đổi vị trí các từ/cụm từ để được đáp án đúng",
    "sdk_type": 6,
    "difficult_level": 2,
    "notice": [],
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Em h&atilde;y sắp xếp c&aacute;c từ sau c&acirc;u c&oacute; nghĩa:</strong></p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0207/1644227457985_anh_1.jpg",
            "caption": "",
            "optUpload": 2,
            "width": "300",
            "height": "200",
            "quantity": 1
        }
    ],
    "options": [
        {
            "id": "answer_ckzcidk0x000g396x7sqin7kh",
            "content": [
                {
                    "type": "html",
                    "content": "đặc biệt"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcidk0x000h396xmnj9r8eb",
            "content": [
                {
                    "type": "html",
                    "content": "Em"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcidk0x000i396xr2s4p82u",
            "content": [
                {
                    "type": "html",
                    "content": "Bác Hồ"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcil2w30011396x5fion9i5",
            "content": [
                {
                    "type": "html",
                    "content": "kể lại"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilkkz001l396xsl7vsauw",
            "content": [
                {
                    "type": "html",
                    "content": "muốn"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilm2b0028396xz31y22je",
            "content": [
                {
                    "type": "html",
                    "content": "việc"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilmye002u396x9x28ej2c",
            "content": [
                {
                    "type": "html",
                    "content": "trồng"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilnpo003g396xlpk7j5hv",
            "content": [
                {
                    "type": "html",
                    "content": "chiếc rễ đa"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzciloa40040396x40n9b92v",
            "content": [
                {
                    "type": "html",
                    "content": "theo một cách"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilowq004m396xzt7qfm0i",
            "content": [
                {
                    "type": "html",
                    "content": "trong vườn"
                }
            ],
            "obj_type": "boxText"
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckzcidk0x000g396x7sqin7kh",
            "answer": 10
        },
        {
            "id": "answer_ckzcidk0x000h396xmnj9r8eb",
            "answer": 1
        },
        {
            "id": "answer_ckzcidk0x000i396xr2s4p82u",
            "answer": 5
        },
        {
            "id": "answer_ckzcil2w30011396x5fion9i5",
            "answer": 3
        },
        {
            "id": "answer_ckzcilkkz001l396xsl7vsauw",
            "answer": 2
        },
        {
            "id": "answer_ckzcilm2b0028396xz31y22je",
            "answer": 4
        },
        {
            "id": "answer_ckzcilmye002u396x9x28ej2c",
            "answer": 6
        },
        {
            "id": "answer_ckzcilnpo003g396xlpk7j5hv",
            "answer": 7
        },
        {
            "id": "answer_ckzciloa40040396x40n9b92v",
            "answer": 9
        },
        {
            "id": "answer_ckzcilowq004m396xzt7qfm0i",
            "answer": 8
        }
    ]
}

export const tfTableQuestion = {
    "id": "61d5244c8d1e34b8498a0f4b",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p><img src=\"https://cdn.vungoi.vn/vungoi/2022/0105/1641358402380_mceclip0.png\" /></p>"
        }
    ],
    "solution_suggestion": [],
    "guide_touch": "Con hãy tích vào ô đúng hoặc sai cho mỗi câu (khẳng định)  dưới đây.",
    "sdk_type": 7,
    "difficult_level": 3,
    "notice": [],
    "question": [
        {
            "type": "html",
            "content": "<h2>Tầng b&igrave;nh lưu kh&ocirc;ng c&oacute; c&aacute;c đặc điểm sau:</h2>"
        }
    ],
    "options": [
        {
            "id": "answer_cky124dxh000g2w6v0qbq296z",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Nơi c&oacute; c&aacute;c hiện tượng thời tiết như m&acirc;y, mưa, gi&oacute;, b&atilde;o, s&eacute;t,...</p>"
                }
            ]
        },
        {
            "id": "answer_cky124dxh000h2w6v9pqkx71q",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Nơi c&oacute; lớp &ocirc;-d&ocirc;n bảo vệ sự sống tr&ecirc;n Tr&aacute;i Đất</p>"
                }
            ]
        },
        {
            "id": "answer_cky125rlr000w2w6vwtqhtzdu",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Kh&ocirc;ng kh&iacute; chuyển động theo chiều ngang</p>"
                }
            ]
        },
        {
            "id": "answer_cky125t1f001c2w6vw5w2hnoq",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Nhiệt độ kh&ocirc;ng kh&iacute; giảm dần theo độ cao</p>"
                }
            ]
        },
        {
            "id": "answer_cky12c7yv001v2w6va1zr213e",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Phần lớn c&aacute;c tia cực t&iacute;m đều bị ngăn lại</p>"
                }
            ]
        },
        {
            "id": "answer_cky12c9k7002h2w6vd75x4zxv",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Nơi xuất hiện cực quang</p>"
                }
            ]
        }
    ],
    "correct_options": [
        {
            "id": "answer_cky124dxh000g2w6v0qbq296z",
            "answer": true
        },
        {
            "id": "answer_cky124dxh000h2w6v9pqkx71q",
            "answer": false
        },
        {
            "id": "answer_cky125rlr000w2w6vwtqhtzdu",
            "answer": false
        },
        {
            "id": "answer_cky125t1f001c2w6vw5w2hnoq",
            "answer": true
        },
        {
            "id": "answer_cky12c7yv001v2w6va1zr213e",
            "answer": false
        },
        {
            "id": "answer_cky12c9k7002h2w6vd75x4zxv",
            "answer": true
        }
    ],
    "spec_question": 1
}

export const findFaultQuestion = {
    "id": "6179196e047439b674336e23",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\">Những từ viết sai ch&iacute;nh tả l&agrave;:</p>\n<p style=\"text-align: justify;\">Em Bống c&oacute; khu&ocirc;n mặt bầu <strong>bỉnh</strong>. Em rất ngoan <strong>ngoản</strong> v&agrave; biết ch&agrave;o hỏi mọi người.</p>\n<p style=\"text-align: justify;\">Sửa lại: bỉnh -&gt; bĩnh, ngoản -&gt; ngo&atilde;n</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Em ch&uacute; &yacute; ph&acirc;n biệt dấu hỏi / dấu ng&atilde;.</p>"
        }
    ],
    "guide_touch": "Con hãy bấm chọn từ/cụm từ chứa lỗi sai",
    "sdk_type": 8,
    "difficult_level": 3,
    "notice": [],
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Bấm chọn v&agrave;o từ viết sai ch&iacute;nh tả trong c&acirc;u sau:</strong></p>\n<p style=\"text-align: center;\">&nbsp;</p>"
        },
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/2021/1027/1635328704505_mceclip0.jpg\" width=\"250\" /></p>"
        }
    ],
    "options": [
        {
            "id": "answer_ckv9aqol40002386y6i3uxjzk",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Em</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9aqol40003386ykwk8cmzs",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Bống</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9auyk7000j386ym2u4wqgc",
            "content": [
                {
                    "type": "html",
                    "content": "<p>c&oacute;</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9av3fx000z386yon0jtbrc",
            "content": [
                {
                    "type": "html",
                    "content": "<p>khu&ocirc;n</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9av871001i386y3f0emb9a",
            "content": [
                {
                    "type": "html",
                    "content": "<p>mặt</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9avgpu0024386yxfvj6cdt",
            "content": [
                {
                    "type": "html",
                    "content": "<p>bầu</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9avqon002t386ytokt046n",
            "content": [
                {
                    "type": "html",
                    "content": "<p>bỉnh</p>"
                }
            ],
            "correct": true
        },
        {
            "id": "answer_ckv9avxn2003l386yjnusxvbv",
            "content": [
                {
                    "type": "html",
                    "content": "<p>.</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9aw7pc004g386yewhrfbh4",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Em</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awfkq005e386yz766l7gh",
            "content": [
                {
                    "type": "html",
                    "content": "<p>rất</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awn9p006f386yjzquddr8",
            "content": [
                {
                    "type": "html",
                    "content": "<p>ngoan</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awu41007j386yw1z4eqyu",
            "content": [
                {
                    "type": "html",
                    "content": "<p>ngoản</p>"
                }
            ],
            "correct": true
        },
        {
            "id": "answer_ckv9ax7cf008q386yk1s1q3ql",
            "content": [
                {
                    "type": "html",
                    "content": "<p>v&agrave;</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axetc00a0386yha3uz3gm",
            "content": [
                {
                    "type": "html",
                    "content": "<p>biết</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axphd00bd386yu1bh99m4",
            "content": [
                {
                    "type": "html",
                    "content": "<p>ch&agrave;o</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axy3i00ct386y228550fa",
            "content": [
                {
                    "type": "html",
                    "content": "<p>hỏi</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9ay7sw00ec386ytk3pp2rx",
            "content": [
                {
                    "type": "html",
                    "content": "<p>mọi</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9ayox100fy386ywl1rckyl",
            "content": [
                {
                    "type": "html",
                    "content": "<p>người</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9az18600hn386yk99c7rzl",
            "content": [
                {
                    "type": "html",
                    "content": "<p>.</p>"
                }
            ],
            "correct": false
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckv9aqol40002386y6i3uxjzk",
            "answer": false
        },
        {
            "id": "answer_ckv9aqol40003386ykwk8cmzs",
            "answer": false
        },
        {
            "id": "answer_ckv9auyk7000j386ym2u4wqgc",
            "answer": false
        },
        {
            "id": "answer_ckv9av3fx000z386yon0jtbrc",
            "answer": false
        },
        {
            "id": "answer_ckv9av871001i386y3f0emb9a",
            "answer": false
        },
        {
            "id": "answer_ckv9avgpu0024386yxfvj6cdt",
            "answer": false
        },
        {
            "id": "answer_ckv9avqon002t386ytokt046n",
            "answer": true
        },
        {
            "id": "answer_ckv9avxn2003l386yjnusxvbv",
            "answer": false
        },
        {
            "id": "answer_ckv9aw7pc004g386yewhrfbh4",
            "answer": false
        },
        {
            "id": "answer_ckv9awfkq005e386yz766l7gh",
            "answer": false
        },
        {
            "id": "answer_ckv9awn9p006f386yjzquddr8",
            "answer": false
        },
        {
            "id": "answer_ckv9awu41007j386yw1z4eqyu",
            "answer": true
        },
        {
            "id": "answer_ckv9ax7cf008q386yk1s1q3ql",
            "answer": false
        },
        {
            "id": "answer_ckv9axetc00a0386yha3uz3gm",
            "answer": false
        },
        {
            "id": "answer_ckv9axphd00bd386yu1bh99m4",
            "answer": false
        },
        {
            "id": "answer_ckv9axy3i00ct386y228550fa",
            "answer": false
        },
        {
            "id": "answer_ckv9ay7sw00ec386ytk3pp2rx",
            "answer": false
        },
        {
            "id": "answer_ckv9ayox100fy386ywl1rckyl",
            "answer": false
        },
        {
            "id": "answer_ckv9az18600hn386yk99c7rzl",
            "answer": false
        }
    ],
    "spec_question": 1
}

export const findFaultQuestion2 = {
    "id": "61f12e4711732e225b0c7571",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p><strong>Sửa:</strong> generous /ˈdʒenərəs/ =&gt; gentle/ˈdʒentl/</p>\n<p><strong>Chọn C</strong></p>"
        },
        {
            "type": "html",
            "content": "<div class=\"card\">\n<div id=\"headingOne\" class=\"card-header\">\n<h5 class=\"mb-0\"><button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#ckyvgk0sk00it386xs8s45ukp_collpase\" aria-expanded=\"true\" aria-controls=\"collapseOne\"><strong>Lyrics:</strong></button></h5>\n</div>\n</div>\n<p>All of those who are hither and yonder</p>\n<p>With love in our hearts</p>\n<p>We grow fonder and fonder</p>\n<p>Hail to those who we hold so dear</p>\n<p>And hail to those who are gathered here</p>\n<p>&nbsp;</p>\n<p>And a happy new year to all that is living</p>\n<p>To all that is gentle, young, and forgiving</p>\n<p>Raise your glass and we'll have a cheer</p>\n<p>My dear acquaintance, a happy new year</p>\n<p>Happy new year</p>"
        },
        {
            "type": "html",
            "content": "<div class=\"card\">\n<div id=\"headingOne\" class=\"card-header\">\n<h5 class=\"mb-0\"><button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#ckyvgkj4q00iu386x30hnzwc1_collpase\" aria-expanded=\"true\" aria-controls=\"collapseOne\"><strong>Lời b&agrave;i h&aacute;t:</strong></button></h5>\n</div>\n</div>\n<p><em>Tất cả những người tha phương cầu thực</em></p>\n<p><em>Với t&igrave;nh y&ecirc;u trong tr&aacute;i tim của ch&uacute;ng ta</em></p>\n<p><em>Ch&uacute;ng ta trở n&ecirc;n vui vẻ v&agrave; ấm &aacute;p hơn</em></p>\n<p><em>Ch&agrave;o mừng những người m&agrave; ch&uacute;ng ta y&ecirc;u qu&yacute;</em></p>\n<p><em>V&agrave; ch&agrave;o mừng những người đang tập trung ở đ&acirc;y</em></p>\n<p>&nbsp;</p>\n<p><em>N&acirc;ng ly của bạn v&agrave; ch&uacute;ng ta sẽ c&oacute; một cuộc ăn mừng</em></p>\n<p><em>Đối với ch&uacute;ng ta tất cả những người đang tập trung ở đ&acirc;y</em></p>\n<p><em>V&agrave; một năm mới hạnh ph&uacute;c cho tất cả những g&igrave; đang tồn tại</em></p>\n<p><em>Đối với tất cả những g&igrave; l&agrave; nhẹ nh&agrave;ng, tốt bụng v&agrave; tha thứ</em></p>\n<p><em>N&acirc;ng ly của bạn v&agrave; ch&uacute;ng ta sẽ c&oacute; một cuộc ăn mừng</em></p>\n<p><em>Bạn th&acirc;n mến của t&ocirc;i ơi, một năm mới hạnh ph&uacute;c nh</em>&eacute;&hellip;</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>X&eacute;t c&aacute;ch ph&aacute;t &acirc;m của c&aacute;c đ&aacute;p &aacute;n</p>\n<p>hither /ˈhɪ&eth;ə(r)/</p>\n<p>fonder /fɒndə(r)/</p>\n<p>generous /ˈdʒenərəs/</p>"
        }
    ],
    "guide_touch": "Con hãy bấm chọn từ/cụm từ chứa lỗi sai sau đó sửa lại từ/cụm từ bằng cách điền từ/cụm từ vào ô trống",
    "sdk_type": 9,
    "difficult_level": 2,
    "notice": [],
    "question": [
        {
            "type": "html",
            "content": "<p><strong>Listen carefully. Find and correct the only mistake below.</strong></p>"
        },
        {
            "type": "html",
            "content": "<p><audio class=\"audio_file\" controls=\"controls\">\n                                                    <source src=\"https://cdn.vungoi.vn/vungoi/2022/0126/1643196244762_My_Dear_Acquaintance_(cau_6).mp3\" type=\"audio/mpeg\" />\n                                                    Your browser does not support the audio element.\n                                              </audio></p>"
        }
    ],
    "suggestion_paragraph": [
        {
            "id": "answer_ckyvgc6em000g386y8g30sf09",
            "content": "hither",
            "name": "TEXT BOX",
            "obj_type": "boxText",
            "optionTypeIndex": 0
        },
        {
            "id": "answer_ckyvgc6em000h386ydsq0nytj",
            "content": "fonder",
            "name": "TEXT BOX",
            "obj_type": "boxText",
            "optionTypeIndex": 0
        },
        {
            "id": "answer_ckyvgc6em000i386y6awc7uq0",
            "content": "generous",
            "name": "TEXT BOX",
            "obj_type": "boxText",
            "optionTypeIndex": 0
        }
    ],
    "options": [
        {
            "id": "answer_ckyvgc6em000j386y9a52y51q",
            "content": [
                {
                    "type": "html",
                    "content": "<p>All of those who are</p>"
                }
            ],
            "correct": "",
            "type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckyvgc6em000k386y3bdwm0mo",
            "content": [
                {
                    "type": "html",
                    "content": "<p>hither</p>"
                }
            ],
            "correct": "",
            "type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckyvgd5bp0011386y16cdst1g",
            "content": [
                {
                    "type": "html",
                    "content": "<p>and yonder</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgdiqg001j386y8obau19m",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvgdoxg0024386y0xy9ho4v",
            "content": [
                {
                    "type": "html",
                    "content": "<p>With love in our hearts</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgduoc002r386y5hhi36m6",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvge19g003h386y64fofuyp",
            "content": [
                {
                    "type": "html",
                    "content": "<p>We grow fonder and</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvge5m7004a386ywkiwszy2",
            "content": [
                {
                    "type": "html",
                    "content": "<p>fonder</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgedpa0055386yw1egltuf",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvgej900063386y5qr3zo06",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hail to those who we hold so dear</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvges8a0073386ym1zn63ib",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvgeyee0086386yfijs1oin",
            "content": [
                {
                    "type": "html",
                    "content": "<p>And hail to those who are gathered here</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgf5uv009b386yt5yvythf",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvgfbvw00aj386y12j4atmd",
            "content": [
                {
                    "type": "html",
                    "content": "<p>And a happy new year to all that is living</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgfy5t001u386x775i01oq",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvgg73k0037386xrcgk4cii",
            "content": [
                {
                    "type": "html",
                    "content": "<p>To all that is</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvggdqi004n386xvc3d6tn7",
            "content": [
                {
                    "type": "html",
                    "content": "<p>generous</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": "gentle"
        },
        {
            "id": "answer_ckyvggx8v0066386x06k7qo3v",
            "content": [
                {
                    "type": "html",
                    "content": "<p>, young, and forgiving</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgh8z9007r386xv5py3tsl",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvghh4d009f386xmbsacbd9",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Raise your glass and we'll have a cheer</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvghqvh00b5386x04wevwq6",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvghze400cy386x12p7jd7s",
            "content": [
                {
                    "type": "html",
                    "content": "<p>My dear acquaintance, a happy new year</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        },
        {
            "id": "answer_ckyvgi9ny00et386xlv28dleu",
            "type": "breakDown"
        },
        {
            "id": "answer_ckyvginni00gr386xcrnlsgjb",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Happy new year</p>"
                }
            ],
            "type": "choiceTextHightLight",
            "correct": ""
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckyvggdqi004n386xvc3d6tn7",
            "answer": "gentle"
        }
    ],
    "spec_question": 1
}

export const multiCorrectQuestion = {
    "id": "61efb789e64eeffeac5678e0",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p>C&aacute;c hồ thủy điện ở Việt Nam l&agrave;: Hồ Trị An, Hồ H&ograve;a B&igrave;nh, Hồ Dầu Tiếng.</p>"
        }
    ],
    "solution_suggestion": [],
    "guide_touch": "Con hãy chọn những đáp án đúng (Được chọn nhiều đáp án)",
    "sdk_type": 10,
    "difficult_level": 4,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p><strong>Chọn c&aacute;c đ&aacute;p &aacute;n đ&uacute;ng:</strong></p>\n<p>C&aacute;c hồ ở Việt Nam được coi l&agrave; hồ thủy điện l&agrave;:</p>"
        }
    ],
    "options": [
        {
            "id": "answer_ckytv4ir8000g386yytix8l30",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hồ Trị An</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv4ir8000h386yfj02mzvn",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hồ T&acirc;y</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv4z58000x386yy9qudt51",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hồ H&ograve;a B&igrave;nh</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv5azu001d386yqf3uoi7p",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hồ Dầu Tiếng</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv5iyi001w386y5muypaxp",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Hồ Ba Bể</p>"
                }
            ]
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckytv4ir8000g386yytix8l30",
            "answer": true
        },
        {
            "id": "answer_ckytv4ir8000h386yfj02mzvn",
            "answer": false
        },
        {
            "id": "answer_ckytv4z58000x386yy9qudt51",
            "answer": true
        },
        {
            "id": "answer_ckytv5azu001d386yqf3uoi7p",
            "answer": true
        },
        {
            "id": "answer_ckytv5iyi001w386y5muypaxp",
            "answer": false
        }
    ],
    "spec_question": 1
}

export const selectSentenceQuestion = {
    "id": "61f7b8c111732e225b0c88ec",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\">Những từ ngữ chỉ người l&agrave;m việc tr&ecirc;n biển l&agrave;: ngư d&acirc;n, bộ đội hải qu&acirc;n, thợ lặn, thủy thủ</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\">Em đọc kĩ c&aacute;c từ ngữ.</p>"
        }
    ],
    "guide_touch": "Con hãy bấm vào từ/cụm từ để chọn. Bấm lại vào từ/cụm từ để bỏ chọn",
    "sdk_type": 11,
    "difficult_level": 2,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Bấm chọn v&agrave;o từ ngữ chỉ người l&agrave;m việc tr&ecirc;n biển?</strong></p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0131/1643624254973_anh_7_ds.png",
            "caption": "",
            "optUpload": 2,
            "width": "200",
            "height": "197",
            "quantity": 1
        }
    ],
    "options": [
        {
            "id": "answer_ckz2ja8ft000g3p6yx6z13vm2",
            "content": [
                {
                    "type": "html",
                    "content": "<p>ngư d&acirc;n</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckz2jg3fk00163p6yy9mwn63y",
            "obj_type": "breakDown"
        },
        {
            "id": "answer_ckz2jgc7c00253p6ylcllfsi8",
            "content": [
                {
                    "type": "html",
                    "content": "<p>bộ đội hải qu&acirc;n</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckz2jgop0002j3p6ytt15wsv4",
            "obj_type": "breakDown"
        },
        {
            "id": "answer_ckz2jgrbr00303p6ypa491rej",
            "content": [
                {
                    "type": "html",
                    "content": "<p>l&aacute;i xe</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckz2jh1yk003j3p6y84sptjj3",
            "obj_type": "breakDown"
        },
        {
            "id": "answer_ckz2jh9p100453p6y429xu2l1",
            "content": [
                {
                    "type": "html",
                    "content": "<p>thợ lặn</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckz2jhdge004t3p6ywhpbfvdx",
            "obj_type": "breakDown"
        },
        {
            "id": "answer_ckz2jhkro005k3p6yn3ictjbv",
            "content": [
                {
                    "type": "html",
                    "content": "<p>thủy thủ</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        },
        {
            "id": "answer_ckz2jhszw006d3p6yotgp1gq3",
            "obj_type": "breakDown"
        },
        {
            "id": "answer_ckz2jhw2d00793p6ywmn6cjwu",
            "content": [
                {
                    "type": "html",
                    "content": "<p>n&ocirc;ng d&acirc;n</p>"
                }
            ],
            "obj_type": "choiceTextHightLight"
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckz2ja8ft000g3p6yx6z13vm2",
            "answer": true
        },
        {
            "id": "answer_ckz2jgc7c00253p6ylcllfsi8",
            "answer": true
        },
        {
            "id": "answer_ckz2jgrbr00303p6ypa491rej",
            "answer": false
        },
        {
            "id": "answer_ckz2jh9p100453p6y429xu2l1",
            "answer": true
        },
        {
            "id": "answer_ckz2jhkro005k3p6yn3ictjbv",
            "answer": true
        },
        {
            "id": "answer_ckz2jhw2d00793p6ywmn6cjwu",
            "answer": false
        }
    ],
    "spec_question": 1
}

export const textNonMathjaxQuestion = {
    "id": "61eecf80e64eeffeac566ebc",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\"><strong>Bước 1: </strong>X&aacute;c định c&aacute;c số v&agrave; x&acirc;y dựng c&aacute;c ph&eacute;p t&iacute;nh</p>\n<p style=\"text-align: justify;\">- Số lớn nhất c&oacute; một chữ số l&agrave;m 9.</p>\n<p style=\"text-align: justify;\">- Đề b&agrave;i cho biết số cần t&igrave;m cộng với 9 bằng 7 cộng 8 n&ecirc;n ta c&oacute;:</p>\n<p style=\"text-align: justify;\">&hellip;&hellip;&hellip;.. + 9 = 7 + 8</p>\n<p style=\"text-align: justify;\"><strong>Bước 2: </strong>X&aacute;c định số cần t&igrave;m</p>\n<p style=\"text-align: justify;\">&hellip;&hellip;&hellip;.. + 9 = 7 + 8</p>\n<p style=\"text-align: justify;\">Như vậy, &hellip;&hellip;&hellip;&hellip;+ 9 = 15</p>\n<p style=\"text-align: justify;\">Em nhẩm bảng cộng (qua 10) v&agrave; t&igrave;m được đ&aacute;p &aacute;n: 6 + 9 = 15</p>\n<p style=\"text-align: justify;\">Vậy số cần t&iacute;m l&agrave; số <strong>6</strong>.</p>\n<p style=\"text-align: justify;\">&nbsp;</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\"><strong>Bước 1: </strong>X&aacute;c định c&aacute;c số v&agrave; x&acirc;y dựng c&aacute;c ph&eacute;p t&iacute;nh.</p>\n<p style=\"text-align: justify;\"><strong>Bước 2: </strong>X&aacute;c định số cần t&igrave;m</p>"
        }
    ],
    "guide_touch": "Con hãy điền từ / cụm từ/ số thích hợp vào các ô trống",
    "sdk_type": 12,
    "difficult_level": 4,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\">T&igrave;m một số, biết rằng số đ&oacute; cộng với số lớn nhất c&oacute; một chữ số sẽ bằng 7 cộng với 8.</p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0124/1643040516978_anh_20.png",
            "caption": "",
            "optUpload": 2,
            "width": "200",
            "height": "200",
            "quantity": 1
        }
    ],
    "options": [
        {
            "id": "answer_ckysvu9cg000g396x9bahoa89",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Số cần t&igrave;m l&agrave; số</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckysvvzk10019396xjxt56207",
            "obj_type": "inputText",
            "width": 5
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckysvvzk10019396xjxt56207",
            "answer": "6"
        }
    ],
    "spec_question": 1
}

export const dragOnBoxQuestion = {
    "id": "61ed7105e64eeffeac566854",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "type": "html",
            "content": "<table style=\"width: 100%;\">\n<tbody>\n<tr>\n<td style=\"text-align: center;\" width=\"319\">\n<p>Từ chỉ hoạt động</p>\n</td>\n<td style=\"text-align: center;\" width=\"319\">\n<p>Từ chỉ đặc điểm</p>\n</td>\n</tr>\n<tr>\n<td style=\"text-align: center;\" width=\"319\">\n<p>Nằm, nghỉ, dậy, ăn</p>\n</td>\n<td style=\"text-align: center;\" width=\"319\">\n<p>&Ecirc;m ả, thơm, &acirc;m thầm, lao xao</p>\n</td>\n</tr>\n</tbody>\n</table>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Em sắp xếp c&aacute;c từ ngữ v&agrave;o nh&oacute;m th&iacute;ch hợp.</p>"
        }
    ],
    "guide_touch": "Kéo Thả Đáp Án Vào Các Cột Tương Ứng",
    "sdk_type": 13,
    "difficult_level": 3,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Sắp xếp c&aacute;c từ trong b&agrave;i sau v&agrave;o nh&oacute;m th&iacute;ch hợp:</strong></p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0123/1642950713605_anh_112.png",
            "caption": "",
            "optUpload": 2,
            "width": "200",
            "height": "200",
            "quantity": 1
        }
    ],
    "boxList": [
        {
            "id": "box_ckyred3lg000k396xqsuujxmm",
            "title": "Từ chỉ hoạt động",
            "index": 0
        },
        {
            "id": "box_ckyred3lg000l396x5e1sxidc",
            "title": "Từ chỉ đặc điểm",
            "index": 1
        }
    ],
    "options": [
        {
            "id": "answer_ckyred3lg000g396xqu3iyvct",
            "content": [
                {
                    "type": "html",
                    "content": "<p>nằm</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000h396xrz0y7703",
            "content": [
                {
                    "type": "html",
                    "content": "<p>nghỉ</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000i396xu8oxxr6g",
            "content": [
                {
                    "type": "html",
                    "content": "<p>&ecirc;m ả</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000j396x7ec4mlsh",
            "content": [
                {
                    "type": "html",
                    "content": "<p>thơm</p>"
                }
            ]
        },
        {
            "id": "answer_ckyref6at001a396x4m38b13k",
            "content": [
                {
                    "type": "html",
                    "content": "<p>d&acirc;̣y</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregdct0020396xnp1i4a2n",
            "content": [
                {
                    "type": "html",
                    "content": "<p>ăn</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregkg8002t396xqx0eu7bq",
            "content": [
                {
                    "type": "html",
                    "content": "<p>&acirc;m th&acirc;̀m</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregwhn003p396xf1h89oow",
            "content": [
                {
                    "type": "html",
                    "content": "<p>lao xao</p>"
                }
            ]
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckyred3lg000g396xqu3iyvct",
            "answer": {
                "index": 0
            }
        },
        {
            "id": "answer_ckyred3lg000h396xrz0y7703",
            "answer": {
                "index": 0
            }
        },
        {
            "id": "answer_ckyred3lg000i396xu8oxxr6g",
            "answer": {
                "index": 1
            }
        },
        {
            "id": "answer_ckyred3lg000j396x7ec4mlsh",
            "answer": {
                "index": 1
            }
        },
        {
            "id": "answer_ckyref6at001a396x4m38b13k",
            "answer": {
                "index": 0
            }
        },
        {
            "id": "answer_ckyregdct0020396xnp1i4a2n",
            "answer": {
                "index": 0
            }
        },
        {
            "id": "answer_ckyregkg8002t396xqx0eu7bq",
            "answer": {
                "index": 1
            }
        },
        {
            "id": "answer_ckyregwhn003p396xf1h89oow",
            "answer": {
                "index": 1
            }
        }
    ],
    "spec_question": 1
}

export const shaftNumberQuestion = {
    "id": "5c8621aa3e0fbb00229ca87d",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "content": "<p>Điền c&aacute;c số c&ograve;n thiếu em thu được d&atilde;y số như sau:</p>\n<p>153; 154; 155; 156; 157; 158; 159.</p>",
            "type": "html"
        }
    ],
    "solution_suggestion": [
        {
            "content": "<p>Đếm xu&ocirc;i c&aacute;c số rồi điền số c&ograve;n thiếu v&agrave;o trục số.</p>",
            "type": "html"
        }
    ],
    "guide_touch": "Con hãy điền số thích hợp vào ô trống",
    "sdk_type": 15,
    "difficult_level": 1,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "content": "<p style=\"text-align: center;\">Điền số th&iacute;ch hợp v&agrave;o chỗ trống:</p>",
            "type": "html"
        },
        {
            "content": "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/1552294038817_cong_nhan.png\" alt=\"\" width=\"180\" height=\"152\" /></p>",
            "type": "html"
        }
    ],
    "options": [
        {
            "x": "-3",
            "obj_type": "richText",
            "content": "153",
            "id": "answer_cjt43q1qh00022y6hzi9zyn7w"
        },
        {
            "x": "-2",
            "obj_type": "richText",
            "content": "154",
            "id": "answer_cjt43tcsm000c2y6hnth4m3z9"
        },
        {
            "x": "-1",
            "obj_type": "inputText",
            "id": "answer_cjt43u218000n2y6ht9lev5m1"
        },
        {
            "x": "0",
            "obj_type": "richText",
            "content": "156",
            "id": "answer_cjt43ujmq00102y6hxqzjs4pj"
        },
        {
            "x": "1",
            "obj_type": "inputText",
            "id": "answer_cjt43uxzn001f2y6hm8yohobt"
        },
        {
            "x": "2",
            "obj_type": "inputText",
            "id": "answer_cjt43v14d001w2y6hl0teks32"
        },
        {
            "x": "3",
            "obj_type": "inputText",
            "id": "answer_cjt43v324002e2y6hz21m30bk"
        }
    ],
    "correct_options": [
        {
            "id": "answer_cjt43u218000n2y6ht9lev5m1",
            "answer": "155"
        },
        {
            "id": "answer_cjt43uxzn001f2y6hm8yohobt",
            "answer": "157"
        },
        {
            "id": "answer_cjt43v14d001w2y6hl0teks32",
            "answer": "158"
        },
        {
            "id": "answer_cjt43v324002e2y6hz21m30bk",
            "answer": "159"
        }
    ],
    "spec_question": 1
}