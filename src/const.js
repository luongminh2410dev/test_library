export const fChoicesData = {
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
    analytics: {
        correct: 0,
        incorrect: 0,
        skiped: 0,
        total_answer: 0,
        percent_false: 0
    },
    sdk_type: 20,
    difficult_degree: 3,
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