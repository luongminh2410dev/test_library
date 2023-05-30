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
            "option_content": [
                {
                    "type": "html",
                    "content": "đặc biệt"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcidk0x000h396xmnj9r8eb",
            "option_content": [
                {
                    "type": "html",
                    "content": "Em"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcidk0x000i396xr2s4p82u",
            "option_content": [
                {
                    "type": "html",
                    "content": "Bác Hồ"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcil2w30011396x5fion9i5",
            "option_content": [
                {
                    "type": "html",
                    "content": "kể lại"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilkkz001l396xsl7vsauw",
            "option_content": [
                {
                    "type": "html",
                    "content": "muốn"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilm2b0028396xz31y22je",
            "option_content": [
                {
                    "type": "html",
                    "content": "việc"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilmye002u396x9x28ej2c",
            "option_content": [
                {
                    "type": "html",
                    "content": "trồng"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilnpo003g396xlpk7j5hv",
            "option_content": [
                {
                    "type": "html",
                    "content": "chiếc rễ đa"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzciloa40040396x40n9b92v",
            "option_content": [
                {
                    "type": "html",
                    "content": "theo một cách"
                }
            ],
            "obj_type": "boxText"
        },
        {
            "id": "answer_ckzcilowq004m396xzt7qfm0i",
            "option_content": [
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
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Nơi c&oacute; c&aacute;c hiện tượng thời tiết như m&acirc;y, mưa, gi&oacute;, b&atilde;o, s&eacute;t,...</p>"
                }
            ]
        },
        {
            "id": "answer_cky124dxh000h2w6v9pqkx71q",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Nơi c&oacute; lớp &ocirc;-d&ocirc;n bảo vệ sự sống tr&ecirc;n Tr&aacute;i Đất</p>"
                }
            ]
        },
        {
            "id": "answer_cky125rlr000w2w6vwtqhtzdu",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Kh&ocirc;ng kh&iacute; chuyển động theo chiều ngang</p>"
                }
            ]
        },
        {
            "id": "answer_cky125t1f001c2w6vw5w2hnoq",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Nhiệt độ kh&ocirc;ng kh&iacute; giảm dần theo độ cao</p>"
                }
            ]
        },
        {
            "id": "answer_cky12c7yv001v2w6va1zr213e",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Phần lớn c&aacute;c tia cực t&iacute;m đều bị ngăn lại</p>"
                }
            ]
        },
        {
            "id": "answer_cky12c9k7002h2w6vd75x4zxv",
            "option_content": [
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
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Em</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9aqol40003386ykwk8cmzs",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Bống</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9auyk7000j386ym2u4wqgc",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>c&oacute;</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9av3fx000z386yon0jtbrc",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>khu&ocirc;n</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9av871001i386y3f0emb9a",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>mặt</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9avgpu0024386yxfvj6cdt",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>bầu</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9avqon002t386ytokt046n",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>bỉnh</p>"
                }
            ],
            "correct": true
        },
        {
            "id": "answer_ckv9avxn2003l386yjnusxvbv",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>.</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9aw7pc004g386yewhrfbh4",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Em</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awfkq005e386yz766l7gh",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>rất</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awn9p006f386yjzquddr8",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>ngoan</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9awu41007j386yw1z4eqyu",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>ngoản</p>"
                }
            ],
            "correct": true
        },
        {
            "id": "answer_ckv9ax7cf008q386yk1s1q3ql",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>v&agrave;</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axetc00a0386yha3uz3gm",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>biết</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axphd00bd386yu1bh99m4",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>ch&agrave;o</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9axy3i00ct386y228550fa",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>hỏi</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9ay7sw00ec386ytk3pp2rx",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>mọi</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9ayox100fy386ywl1rckyl",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>người</p>"
                }
            ],
            "correct": false
        },
        {
            "id": "answer_ckv9az18600hn386yk99c7rzl",
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Hồ Trị An</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv4ir8000h386yfj02mzvn",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Hồ T&acirc;y</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv4z58000x386yy9qudt51",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Hồ H&ograve;a B&igrave;nh</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv5azu001d386yqf3uoi7p",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Hồ Dầu Tiếng</p>"
                }
            ]
        },
        {
            "id": "answer_ckytv5iyi001w386y5muypaxp",
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
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
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>nằm</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000h396xrz0y7703",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>nghỉ</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000i396xu8oxxr6g",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>&ecirc;m ả</p>"
                }
            ]
        },
        {
            "id": "answer_ckyred3lg000j396x7ec4mlsh",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>thơm</p>"
                }
            ]
        },
        {
            "id": "answer_ckyref6at001a396x4m38b13k",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>d&acirc;̣y</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregdct0020396xnp1i4a2n",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>ăn</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregkg8002t396xqx0eu7bq",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>&acirc;m th&acirc;̀m</p>"
                }
            ]
        },
        {
            "id": "answer_ckyregwhn003p396xf1h89oow",
            "option_content": [
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

export const mathQuillQuestion = {
    "id": "61f15b2811732e225b0c75da",
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
            "content": "<p><img src=\"https://cdn.vungoi.vn/vungoi/2022/0128/1643334087438_image-removebg-preview_(8).png\" alt=\"\" width=\"487\" height=\"87\" /></p>"
        },
        {
            "type": "html",
            "content": "<p>Vậy 81 &ndash; 53 = 28</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p style=\"text-align: justify;\">Thực hiện t&iacute;nh từ phải qua tr&aacute;i, lần lượt trừ hai số đơn vị, hai số chục.</p>\n<p style=\"text-align: justify;\">Lưu &yacute;: cần phải trả 1 đơn vị v&agrave;o h&agrave;ng chục khi mượn 1 chục từ h&agrave;ng chục sang h&agrave;ng đơn vị.</p>"
        }
    ],
    "guide_touch": "Con hãy điền số hoặc chữ số thích hợp vào ô trống",
    "sdk_type": 14,
    "difficult_level": 1,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\">T&iacute;nh gi&aacute; trị ph&eacute;p t&iacute;nh:</p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0126/1643207283266_anh_51_ds_.png",
            "caption": "",
            "optUpload": 2,
            "width": "300",
            "height": "200",
            "quantity": 1
        }
    ],
    "mathquill": [
        {
            "id": "answer_ckyvn4v2j000h396xzo0bj050",
            "obj_type": "mInputText",
            "content": "\\frac{\\stimes{81}{53}}{\\mInputText{1}{28}}"
        }
    ],
    "correct_options": [
        {
            "answer": "28",
            "id": "mInputText_1"
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
        },
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

export const mathQuillQuestion2 = {
    "id": "5d53bf1172c7660022a853ba",
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "solution_detail": [
        {
            "content": "<p>\\(\\dfrac{19}{13}+\\dfrac{14}{6}+\\dfrac{1}{9}\\)&nbsp;\\(+\\dfrac{4}{6}+\\dfrac{7}{13}+\\dfrac{17}{9}\\)</p>\n<p>\\(= \\left( \\dfrac{19}{13}+\\dfrac{7}{13} \\right) \\)&nbsp;\\(+ \\left( \\dfrac{14}{6}+\\dfrac{4}{6} \\right) \\)&nbsp;\\(+ \\left( \\dfrac{1}{9}+\\dfrac{17}{9} \\right) \\)</p>\n<p>\\(=\\dfrac{26}{13} +\\dfrac{18}{6} +\\dfrac{18}{9}\\)</p>\n<p>\\(=2+3+2\\)</p>\n<p>\\(=7\\)</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
            "type": "html"
        }
    ],
    "solution_suggestion": [
        {
            "content": "<p>&Aacute;p dụng t&iacute;nh chất giao ho&aacute;n v&agrave; kết hợp của ph&eacute;p cộng để nh&oacute;m c&aacute;c ph&acirc;n số c&oacute; c&ugrave;ng mẫu số lại th&agrave;nh một tổng.</p>",
            "type": "html"
        }
    ],
    "guide_touch": "Con hãy điền số hoặc chữ số thích hợp vào ô trống",
    "sdk_type": 16,
    "difficult_level": 1,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/1565768463284_000c1.jpg\" alt=\"\" width=\"167\" height=\"144\" /></p>\n<p style=\"text-align: center;\">T&iacute;nh gi&aacute; trị biểu thức bằng c&aacute;ch hợp l&yacute;.</p>",
            "type": "html"
        }
    ],
    "mathquill": [
        {
            "content": "\\frac{19}{13}+\\frac{14}{6}+\\frac{1}{9}+\\frac{4}{6}+\\frac{7}{13}+\\frac{17}{9}",
            "id": "answer_cjzay2jid00023b6hpxs8f3tn"
        },
        {
            "content": "=(\\frac{19}{13}+\\frac{\\inputText{1}{}}{\\inputText{2}{}})+(\\frac{14}{6}+\\frac{\\inputText{3}{}}{\\inputText{4}{}})+(\\frac{1}{9}+\\frac{\\inputText{5}{}}{\\inputText{6}{}})",
            "id": "answer_cjzay2jid00033b6hcocnczhi"
        },
        {
            "content": "=\\frac{\\inputText{7}{}}{\\inputText{8}{}}+\\frac{\\inputText{9}{}}{6}+\\frac{\\inputText{10}{}}{9}",
            "id": "Nội Dung Theo Từng Dòng_cjzayff7g000f3b6h00ybxkiy"
        },
        {
            "content": "=\\inputText{11}{}+\\inputText{12}{}+\\inputText{13}{}",
            "id": "Nội Dung Theo Từng Dòng_cjzayhx0l000s3b6hcgsqi5nf"
        },
        {
            "content": "=\\inputText{14}{}",
            "id": "Nội Dung Theo Từng Dòng_cjzayjben00173b6hdvaeqhw3"
        }
    ],
    "correct_options": [
        {
            "id": "inputText_1",
            "answer": "7"
        },
        {
            "id": "inputText_2",
            "answer": "13"
        },
        {
            "id": "inputText_3",
            "answer": "4"
        },
        {
            "id": "inputText_4",
            "answer": "6"
        },
        {
            "id": "inputText_5",
            "answer": "17"
        },
        {
            "id": "inputText_6",
            "answer": "9"
        },
        {
            "id": "inputText_7",
            "answer": "26"
        },
        {
            "id": "inputText_8",
            "answer": "13"
        },
        {
            "id": "inputText_9",
            "answer": "18"
        },
        {
            "id": "inputText_10",
            "answer": "18"
        },
        {
            "id": "inputText_11",
            "answer": "2"
        },
        {
            "id": "inputText_12",
            "answer": "3"
        },
        {
            "id": "inputText_13",
            "answer": "2"
        },
        {
            "id": "inputText_14",
            "answer": "7"
        }
    ],
    "spec_question": 1
}

export const multiSelectBoxQuestion = {
    "id": "620276ce77e73fc854d3f31e",
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
            "content": "<p style=\"text-align: justify;\">H&egrave; vừa rồi, em đ&atilde; được <strong>đi biển</strong> chơi. Bố em l&ecirc;n kế hoạch cho cả nh&agrave; được tham gia một chuyến đi thật th&uacute; vị. Gia đ&igrave;nh em c&ugrave;ng nhau đi <strong>tắm biển</strong>. Bố dẫn hai mẹ con em tới ăn ở một nh&agrave; h&agrave;ng <strong>hải sản</strong> rất nhiều m&oacute;n ăn ngon. Em được ngắm nh&igrave;n những cảnh đẹp v&agrave; chơi rất nhiều <strong>tr&ograve; chơi</strong> th&uacute; vị. Cả gia đ&igrave;nh em đều vui v&agrave; <strong>hạnh ph&uacute;c</strong> v&igrave; đ&atilde; c&oacute; qu&atilde;ng thời gian thật tuyệt vời ở đ&acirc;y. Đ&acirc;y l&agrave; một chuyến đi thật <strong>đ&aacute;ng nhớ</strong> với em. Em mong sau n&agrave;y sẽ c&oacute; thật nhiều những chuyến đi như thế.</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Em l&agrave;m theo y&ecirc;u cầu của b&agrave;i tập.</p>"
        }
    ],
    "guide_touch": "Con hãy chọn đáp án đúng nhất để điền vào chỗ trống",
    "sdk_type": 17,
    "difficult_level": 4,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Điền v&agrave;o chỗ trống để ho&agrave;n thiện đoạn văn kể về một buổi đi chơi với người th&acirc;n:</strong></p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0208/1644328160304_anh_3.png",
            "caption": "",
            "optUpload": 2,
            "width": "200",
            "height": "200",
            "quantity": 1
        }
    ],
    "options": [
        {
            "id": "answer_ckze6hm17000g396wt1wqmdaa",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>H&egrave; vừa rồi, em đ&atilde; được</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6hm17000h396w7d2qtsua",
            "option_content": [
                {
                    "value": "đi biển"
                },
                {
                    "value": "tắm biển"
                },
                {
                    "value": "đáng nhớ"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6j1w7009z396wtdrfmr20",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>chơi. Bố em l&ecirc;n kế</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6jfr000ax396w7iwhymuh",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>hoạch cho cả nh&agrave; được tham gia một chuyến đi thật th&uacute; vị.</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6jo5f00bx396wgkvdct0b",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>Gia đ&igrave;nh em c&ugrave;ng nhau đi</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6juzv00d8396w9xd627jj",
            "option_content": [
                {
                    "value": "trò chơi"
                },
                {
                    "value": "tắm biển"
                },
                {
                    "value": "hạnh phúc"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6jwxv00e6396wg94f889a",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>. Bố dẫn hai mẹ</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6kztv01vg396wqz1o5hln",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>con em tới ăn ở một nh&agrave; h&agrave;ng</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6l87h01xd396wf095p5ts",
            "option_content": [
                {
                    "value": "đáng nhớ"
                },
                {
                    "value": "đi biển"
                },
                {
                    "value": "hải sản"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6lr8j0321396w3azhruoq",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>rất nhiều</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6lyib0349396w22ue21iy",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>m&oacute;n ăn ngon. Em được ngắm nh&igrave;n những cảnh đẹp v&agrave; chơi</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6m9sf037n396wuimls23n",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>r&acirc;́t nhi&ecirc;̀u</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6miya03ag396wnhlawkg6",
            "option_content": [
                {
                    "value": "tắm biển"
                },
                {
                    "value": "trò chơi"
                },
                {
                    "value": "hải sản"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6mnqd03cc396w1hwd8ebd",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>th&uacute; vị. Cả gia đ&igrave;nh em đều vui v&agrave;</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6o752057x396wxitc38dy",
            "option_content": [
                {
                    "value": "tắm biển"
                },
                {
                    "value": "trò chơi"
                },
                {
                    "value": "hạnh phúc"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6oavg05a1396w5iajnx2x",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>v&igrave; đ&atilde; c&oacute; qu&atilde;ng thời gian&nbsp;thật&nbsp;tuyệt vời&nbsp;</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6qeag07jp396wafamxs7q",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>ở đ&acirc;y. Đ&acirc;y l&agrave; một chuyến đi thật</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6qnnq07ng396wdnt78kne",
            "option_content": [
                {
                    "value": "đáng nhớ"
                },
                {
                    "value": "hạnh phúc"
                }
            ],
            "obj_type": "choiceSelectOption"
        },
        {
            "id": "answer_ckze6qskn07py396wc4uk1lw0",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>với em. Em mong sau n&agrave;y sẽ c&oacute; thật nhiều những chuyến đi</p>"
                }
            ],
            "obj_type": "richText"
        },
        {
            "id": "answer_ckze6rlbf09og396w4dbow6nq",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p>như thế.</p>"
                }
            ],
            "obj_type": "richText"
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckze6hm17000h396w7d2qtsua",
            "answer": "1"
        },
        {
            "id": "answer_ckze6juzv00d8396w9xd627jj",
            "answer": "2"
        },
        {
            "id": "answer_ckze6l87h01xd396wf095p5ts",
            "answer": "3"
        },
        {
            "id": "answer_ckze6miya03ag396wnhlawkg6",
            "answer": "2"
        },
        {
            "id": "answer_ckze6o752057x396wxitc38dy",
            "answer": "3"
        },
        {
            "id": "answer_ckze6qnnq07ng396wdnt78kne",
            "answer": "1"
        }
    ],
    "spec_question": 1
}

export const chooseCorrectestAnswer = {
    "id": "62027a0877e73fc854d3f328",
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
            "content": "<p>Cổ k&iacute;nh l&agrave; cổ v&agrave; trang nghi&ecirc;m.</p>\n<p>Chọn đ&aacute;p &aacute;n:&nbsp;<strong>cổ v&agrave; trang nghi&ecirc;m</strong></p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Em xem phần ch&uacute; th&iacute;ch trong b&agrave;i.</p>"
        }
    ],
    "guide_touch": "Con hãy chọn đáp án đúng nhất",
    "sdk_type": 18,
    "difficult_level": 1,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p style=\"text-align: center;\"><strong>Em hiểu &ldquo;<em>cổ k&iacute;nh&rdquo; </em>l&agrave; g&igrave;?</strong></p>"
        },
        {
            "type": "image",
            "url": "https://cdn.vungoi.vn/vungoi/2022/0208/1644329347827_anh_2.jpg",
            "caption": "",
            "optUpload": 2,
            "width": "300",
            "height": "200",
            "quantity": 1
        },
        {
            "type": "html",
            "content": "<div class=\"card\">\n<div id=\"headingOne\" class=\"card-header\">\n<h5 class=\"mb-0\" style=\"text-align: center;\"><button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#ckze7a5m40016396v1adx5iaq_collpase\" aria-expanded=\"true\" aria-controls=\"collapseOne\"> Xem B&agrave;i Đọc </button></h5>\n</div>\n<div id=\"ckze7a5m40016396v1adx5iaq_collpase\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n<div class=\"card-body\">\n<p style=\"text-align: center;\"><strong>HỒ GƯƠM</strong></p>\n<p style=\"text-align: justify;\">Nh&agrave; t&ocirc;i ở H&agrave; Nội, c&aacute;ch Hồ Gươm kh&ocirc;ng xa. Từ tr&ecirc;n cao nh&igrave;n xuống, mặt hồ như một chiếc gương bầu dục lớn, s&aacute;ng long lanh.</p>\n<p style=\"text-align: justify;\">Cầu Th&ecirc; H&uacute;c m&agrave;u son, cong cong như con t&ocirc;m, dẫn v&agrave;o đền Ngọc Sơn. M&aacute;i đền lấp l&oacute; b&ecirc;n gốc đa gi&agrave;, rễ l&aacute; xum xu&ecirc;. Xa một ch&uacute;t l&agrave; Th&aacute;p R&ugrave;a, tường r&ecirc;u cổ k&iacute;nh. Th&aacute;p x&acirc;y tr&ecirc;n g&ograve; đất giữa hồ, cỏ mọc xanh um.</p>\n<p style=\"text-align: justify;\">C&oacute; buổi, người ta thấy c&oacute; con r&ugrave;a lớn, đầu to như tr&aacute;i bưởi, nh&ocirc; l&ecirc;n khỏi mặt nư&oacute;c. R&ugrave;a như lắng nghe tiếng chu&ocirc;ng đồng hồ tr&ecirc;n tầng cao như bưu điện, bu&ocirc;ng từng tiếng ng&acirc;n nga trong gi&oacute;. T&ocirc;i thầm nghĩ: kh&ocirc;ng biết c&oacute; phải r&ugrave;a đ&atilde; từng ngậm thanh kiếm của vua L&ecirc; thắng giặc đ&oacute; kh&ocirc;ng?</p>\n<p style=\"text-align: right;\">(Theo Ng&ocirc; Qu&acirc;n Miện)</p>\n<p style=\"text-align: justify;\"><strong>Từ ngữ</strong></p>\n<p style=\"text-align: justify;\">- <em>Hồ Gươm</em>: c&ograve;n gọi l&agrave; hồ Ho&agrave;n Kiếm, ở Thủ đ&ocirc; H&agrave; Nội.</p>\n<p style=\"text-align: justify;\">- <em>Cổ k&iacute;nh</em>: Cổ v&agrave; trang nghi&ecirc;m.</p>\n</div>\n</div>\n</div>"
        }
    ],
    "options": [
        {
            "id": "answer_ckze75lw4000g396vvwc4wgbh",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p style=\"text-align: center;\">mới v&agrave; sang trọng</p>"
                }
            ]
        },
        {
            "id": "answer_ckze75lw4000h396vntneogky",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p style=\"text-align: center;\">cổ v&agrave; trang nghi&ecirc;m</p>"
                }
            ]
        },
        {
            "id": "answer_ckze75lw4000i396ve1g6iv5x",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p style=\"text-align: center;\">mới v&agrave; hiện đại</p>"
                }
            ]
        },
        {
            "id": "answer_ckze75lw4000j396vvfr8hcr9",
            "option_content": [
                {
                    "type": "html",
                    "content": "<p style=\"text-align: center;\">cổ nhưng kh&ocirc;ng c&ograve;n tồn tại nữa</p>"
                }
            ]
        }
    ],
    "correct_options": [
        {
            "id": "answer_ckze75lw4000g396vvwc4wgbh",
            "answer": false
        },
        {
            "id": "answer_ckze75lw4000h396vntneogky",
            "answer": true
        },
        {
            "id": "answer_ckze75lw4000i396ve1g6iv5x",
            "answer": false
        },
        {
            "id": "answer_ckze75lw4000j396vvfr8hcr9",
            "answer": false
        }
    ],
    "spec_question": 1
}

export const essayQuestion = {
    "id": "638763fefd8cc0588a1621d3",
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
            "content": "<p>Gọi \\(a,b,c\\) lần lượt l&agrave; c&aacute;c số đo của h&igrave;nh hộp chữ nhật.</p>\n<p>Khi đ&oacute; ta c&oacute; \\({S_{tp}} = 2\\left( {ab + bc + ca} \\right) = 64\\).</p>\n<p>\\( \\Leftrightarrow ab + bc + ca = 32\\).</p>\n<p>Lại c&oacute; độ d&agrave;i đường ch&eacute;o bằng 8 n&ecirc;n ta c&oacute; \\({a^2} + {b^2} + {c^2} = 64\\).</p>\n<p>X&eacute;t hệ \\(\\left\\{ \\begin{array}{l}ab + bc + ca = 32\\\\{a^2} + {b^2} + {c^2} = 64\\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l}ab + bc + ca = 32\\\\{\\left( {a + b + c} \\right)^2} - 2\\left( {ab + bc + ca} \\right) = 64\\end{array} \\right.\\)</p>\n<p>\\( \\Leftrightarrow \\left\\{ \\begin{array}{l}b\\left( {a + c} \\right) + ca = 32\\\\{\\left( {a + b + c} \\right)^2} = 128\\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l}ca = 32 - b\\left( {a + c} \\right)\\\\a + b + c = 8\\sqrt 2 \\end{array} \\right.\\)</p>\n<p>Ta c&oacute; \\(V = abc = b\\left[ {32 - b\\left( {a + c} \\right)} \\right] = b\\left[ {32 - b\\left( {8\\sqrt 2&nbsp; - b} \\right)} \\right] = 32b - 8\\sqrt 2 {b^2} + {b^3}\\).</p>\n<p>Ta c&oacute; \\(\\left\\{ \\begin{array}{l}a + c = 8\\sqrt 2&nbsp; - b\\\\b\\left( {8\\sqrt 2&nbsp; - b} \\right) + ca = 32\\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l}a + c = 8\\sqrt 2&nbsp; - b\\\\ca = 32 - 8\\sqrt 2 b + {b^2}\\end{array} \\right.\\)</p>\n<p>Để tồn tại \\(a,c\\) th&igrave; \\({S^2} \\ge 4P \\Leftrightarrow {\\left( {8\\sqrt 2&nbsp; - b} \\right)^2} \\ge 4\\left( {32 - 8\\sqrt 2 b + {b^2}} \\right)\\)</p>\n<p>\\( \\Leftrightarrow 3{b^2} - 16\\sqrt 2 b \\le 0\\)</p>\n<p>\\( \\Leftrightarrow 0 \\le b \\le \\dfrac{{16\\sqrt 2 }}{3}\\).</p>\n<p>X&eacute;t h&agrave;m số \\(V = 32b - 8\\sqrt 2 {b^2} + {b^3}\\).</p>\n<p>\\(V' = 32 - 16\\sqrt 2 b + 3{b^2}\\).</p>\n<p>Cho \\(V' = 0 \\Leftrightarrow 32 - 16\\sqrt 2 b + 3{b^2} = 0 \\Leftrightarrow \\left[ \\begin{array}{l}b = 4\\sqrt 2 \\\\b = \\dfrac{{4\\sqrt 2 }}{3}\\end{array} \\right.\\)</p>\n<p>Ta c&oacute; bảng biến thi&ecirc;n:</p>"
        },
        {
            "type": "html",
            "content": "<p><img src=\"https://cdn.vungoi.vn/vungoi/2022/1130/1669817327612_mceclip0.png\" width=\"321\" /></p>"
        },
        {
            "type": "html",
            "content": "<p>Dựa v&agrave;o bảng biến thi&ecirc;n, ta c&oacute; \\({V_{\\max }} = \\dfrac{{512\\sqrt 2 }}{{27}}\\).</p>\n<p>Khi đ&oacute; \\(a = 512,\\,\\,b = 27\\).</p>\n<p>Vậy \\(a - 2b = 512 - 2.27 = 458\\).</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p><strong>Bước 1: </strong>T&igrave;m \\(V\\) theo \\(b\\) v&agrave; t&igrave;m điều kiện x&aacute;c định của \\(b\\).</p>\n<p><strong>Bước 2:</strong> Khảo s&aacute;t h&agrave;m số \\(V\\left( b \\right)\\) v&agrave; kết luận.</p>"
        }
    ],
    "sdk_type": 19,
    "difficult_level": 4,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p>Cho h&igrave;nh hộp chữ nhật c&oacute; diện t&iacute;ch to&agrave;n phần bằng 64, độ d&agrave;i đường ch&eacute;o bằng 8. Gi&aacute; trị lớn nhất của thể t&iacute;ch khối hộp đ&oacute; bằng \\(\\dfrac{{a\\sqrt 2 }}{b}\\), với \\(a,b\\) l&agrave; c&aacute;c số nguy&ecirc;n dương v&agrave; \\(\\dfrac{{a\\sqrt 2 }}{b}\\) l&agrave; ph&acirc;n số tối giản. Khi đ&oacute; \\(a - 2b\\) bằng</p>"
        }
    ],
    "prefix_input": [
        {
            "type": "html",
            "content": "<p><strong>Đ&aacute;p &aacute;n:&nbsp;</strong></p>"
        }
    ],
    "correct_options": [
        "458"
    ],
    "spec_question": 1
}

export const textDGNLQuestion = {
    "id": "6385feda3a24fad0792f71cd",
    "content_format": 'array',
    "analytics": {
        "correct": 0,
        "incorrect": 0,
        "skiped": 0,
        "total_answer": 0,
        "percent_false": 0
    },
    "sdk_type": 20,
    "difficult_level": 3,
    "request_question": [
        {
            "type": "html",
            "content": "<p><strong>1. Đặt </strong>\\(AM = m\\left( {0 \\le m \\le 2a} \\right)\\)<strong>. T&iacute;nh thể t&iacute;ch khối tứ diện <em>A&rsquo;KID</em> theo a v&agrave; m, trong đ&oacute; <em>I</em> l&agrave; t&acirc;m của h&igrave;nh hộp. T&igrave;m vị tr&iacute; của điểm <em>M</em> để thể t&iacute;ch đ&oacute; đạt gi&aacute; trị lớn nhất.</strong></p>\n<p><strong>2. Khi <em>M</em> l&agrave; trung điểm của <em>AD</em>.</strong></p>\n<p><strong>a) Hỏi thiết diện của h&igrave;nh hộp, cắt bởi mặt phẳng </strong>\\(\\left( {B'CK} \\right)\\)<strong> l&agrave; h&igrave;nh g&igrave;? T&iacute;nh diện t&iacute;ch của thiết diện đ&oacute; theo <em>a</em>.</strong></p>\n<p><strong>b) Chứng minh rẳng đường thẳng <em>B&rsquo;M</em> tiếp x&uacute;c với mặt cầu đường k&iacute;nh <em>AA&rsquo;</em>.</strong></p>"
        }
    ],
    "question": [
        {
            "type": "html",
            "content": "<p>Cho h&igrave;nh hộp chữ nhật <em>ABCD.A&rsquo;B&rsquo;C&rsquo;D&rsquo;</em> (<em>AA&rsquo;, BB&rsquo;, CC&rsquo;, DD&rsquo;</em> song song v&agrave; <em>AC</em> l&agrave; đường ch&eacute;o của h&igrave;nh chữ nhật <em>ABCD</em>) c&oacute; \\(AB = a\\), \\(AD = 2a\\), \\(AA' = a\\sqrt 2 \\). <em>M</em> l&agrave; một điểm thuộc đoạn <em>AD</em>, <em>K</em> l&agrave; trung điểm của <em>B&rsquo;M</em>.</p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p><strong>1.</strong></p>\n<p>-Mặt phẳng \\(\\left( {KID} \\right)\\) tr&ugrave;ng với mặt phẳng \\(\\left( {AB'C'D} \\right)\\)</p>\n<p>-T&iacute;nh \\(h = d\\left( {A',\\left( {KID} \\right)} \\right) = d\\left( {A',\\left( {AB'C'D} \\right)} \\right) = A'H\\)</p>\n<p>-T&iacute;nh \\({S_{\\Delta B'MD}}\\).</p>\n<p>-\\({S_{\\Delta DIK}} = \\dfrac{1}{4}{S_{\\Delta B'MD}}\\)</p>\n<p>-\\({V_{A'KID}} = \\dfrac{1}{3}.{S_{\\Delta DIK}}.A'H\\)</p>\n<p><strong>2.</strong></p>\n<p><strong>a)</strong> T&igrave;m tất cả c&aacute;c giao tuyến của \\(\\left( {B'CK} \\right)\\) v&agrave; c&aacute;c mặt của h&igrave;nh hộp.</p>\n<p><strong>b)</strong> Chứng minh \\(d\\left( {N,B'M} \\right) = \\dfrac{{AA'}}{2}\\).</p>"
        }
    ],
    "solution_detail": [
        {
            "type": "html",
            "content": "<p><strong>1. T&igrave;m vị tr&iacute; của điểm M để thể t&iacute;ch A&rsquo;KID đạt gi&aacute; trị lớn nhất.</strong></p>\n<p><strong><img src=\"https://cdn.vungoi.vn/vungoi/2022/1129/1669725815811_mceclip0.png\" width=\"321\" /></strong></p>"
        },
        {
            "type": "html",
            "content": "<p>Ta c&oacute; mặt phẳng \\(\\left( {KID} \\right)\\) tr&ugrave;ng với mặt phẳng \\(\\left( {AB'C'D} \\right)\\)</p>\n<p>Dựng \\(A'H \\bot AB'\\)&nbsp;&nbsp; (1)</p>\n<p>Ta c&oacute;: \\(DA \\bot \\left( {ABB'A'} \\right)\\) \\( \\Rightarrow DA \\bot A'H\\)&nbsp;&nbsp; (2)</p>\n<p>Từ (1) v&agrave; (2) \\( \\Rightarrow A'H \\bot \\left( {AB'C'D} \\right)\\) n&ecirc;n \\(A'H = h\\) ch&iacute;nh l&agrave; khoảng c&aacute;ch từ A&rsquo; đến \\(\\left( {AB'C'D} \\right)\\).</p>\n<p>Trong \\(\\Delta AA'B'\\) vu&ocirc;ng tại A&rsquo;, đường cao A&rsquo;H:</p>\n<p>\\(\\dfrac{1}{{A'{H^2}}} = \\dfrac{1}{{A'{A^2}}} + \\dfrac{1}{{A'B{'^2}}}\\)</p>\n<p>\\( \\Rightarrow \\dfrac{1}{{{h^2}}} = \\dfrac{1}{{2{a^2}}} + \\dfrac{1}{{{a^2}}} = \\dfrac{3}{{2{a^2}}} \\Rightarrow h = \\dfrac{{a\\sqrt 6 }}{3}\\)</p>\n<p>Ta c&oacute;: \\({S_{\\Delta DIK}} = {S_{\\Delta B'KI}} = \\dfrac{1}{4}{S_{\\Delta B'MD}}\\)</p>\n<p>\\(\\dfrac{{{S_{\\Delta B'MD}}}}{{{S_{\\Delta AB'D}}}} = \\dfrac{{\\dfrac{1}{2}MD.B'D.\\sin \\widehat {MDB'}}}{{\\dfrac{1}{2}AD.B'D.\\sin \\widehat {MDB'}}} = \\dfrac{{2a - m}}{{2a}}\\)</p>\n<p>\\( \\Rightarrow {S_{\\Delta B'MD}} = \\dfrac{{2a - m}}{{2a}}{S_{\\Delta AB'D}}\\)</p>\n<p>\\({S_{\\Delta AB'D}} = \\dfrac{1}{2}AD.AB' = \\dfrac{1}{2}.2a.\\sqrt {2{a^2} + {a^2}}&nbsp; = {a^2}\\sqrt 3 \\)</p>\n<p>\\( \\Rightarrow {S_{\\Delta DIK}} = \\dfrac{1}{4}{S_{\\Delta B'MD}} = \\dfrac{1}{4}.\\dfrac{{2a - m}}{{2a}}{S_{\\Delta AB'D}} = \\dfrac{{a\\sqrt 3 \\left( {2a - m} \\right)}}{8}\\)</p>\n<p>Thể t&iacute;ch của tứ diện A&rsquo;KID l&agrave;:</p>\n<p>\\({V_{A'KID}} = \\dfrac{1}{3}.{S_{\\Delta DIK}}.A'H = \\dfrac{1}{3}.\\dfrac{{a\\sqrt 3 \\left( {2a - m} \\right)}}{8}.\\dfrac{{a\\sqrt 6 }}{3} = \\dfrac{{{a^2}\\left( {2a - m} \\right)\\sqrt 2 }}{{24}}\\)</p>\n<p>\\({V_{A'KID}}\\) đạt gi&aacute; trị lớn nhất \\( \\Leftrightarrow 2a - m\\) đạt gi&aacute; trị lớn nhất.</p>\n<p>Do \\(0 \\le m \\le 2a\\) n&ecirc;n \\({V_{A'KID}}\\) đạt gi&aacute; trị lớn nhất \\( \\Leftrightarrow m = 0\\). Khi đ&oacute; M ch&iacute;nh l&agrave; điểm A.</p>\n<p><strong>2.</strong></p>\n<p><strong>a)</strong></p>"
        },
        {
            "type": "html",
            "content": "<p><img src=\"https://cdn.vungoi.vn/vungoi/2022/1129/1669725857604_mceclip0.png\" /></p>"
        },
        {
            "type": "html",
            "content": "<p>\\(BC\\parallel \\left( {AA'D'D} \\right)\\) n&ecirc;n mặt phẳng \\(\\left( {B'KC} \\right)\\) cắt mặt phẳng \\(\\left( {AA'D'D} \\right)\\) theo giao tuyến \\(MN\\parallel A'D\\).</p>\n<p>V&igrave; M l&agrave; trung điểm của AD\\( \\Rightarrow \\)N l&agrave; trung điểm của AA&rsquo;</p>\n<p>Thiết diện của h&igrave;nh hộp cắt bởi mặt phẳng \\(\\left( {B'KC} \\right)\\) l&agrave; h&igrave;nh thang B&rsquo;CMN.</p>\n<p>\\(BM \\bot MC,B'B \\bot \\left( {ABCD} \\right) \\Rightarrow B'M \\bot MC\\)</p>\n<p>Đường cao \\(ML = h\\) của \\(\\Delta B'MC\\) vu&ocirc;ng tại M cũng l&agrave; đường cao của h&igrave;nh thang B&rsquo;CMN.</p>\n<p>Ta c&oacute;:</p>\n<p>\\(MC = a\\sqrt 2 \\)</p>\n<p>\\(B'{M^2} = B'{B^2} + B{M^2} = B'{B^2} + A{B^2} + A{M^2} = 2{a^2} + {a^2} + {a^2} = 4{a^2}\\)</p>\n<p>\\(\\Delta B'MC\\) vu&ocirc;ng tại M n&ecirc;n:</p>\n<p>\\(\\dfrac{1}{{M{L^2}}} = \\dfrac{1}{{B'{M^2}}} + \\dfrac{1}{{M{C^2}}} = \\dfrac{1}{{4{a^2}}} + \\dfrac{1}{{2{a^2}}} \\Rightarrow ML = \\dfrac{{2a}}{{\\sqrt 3 }}\\)</p>\n<p>Diện t&iacute;ch thiết diện B&rsquo;CMN l&agrave;:</p>\n<p>\\({S_{B'CMN}} = \\dfrac{1}{2}\\left( {B'C + MN} \\right).ML = \\dfrac{1}{2}\\left( {a\\sqrt 6&nbsp; + \\dfrac{{a\\sqrt 6 }}{2}} \\right).\\dfrac{{2a}}{{\\sqrt 3 }} = \\dfrac{{3{a^2}\\sqrt 2 }}{2}\\)</p>\n<p><strong>b)</strong></p>\n<p>\\({S_{\\Delta B'MN}} = {S_{B'CMN}} - {S_{\\Delta B'MC}} = \\dfrac{{3{a^2}\\sqrt 2 }}{2} - \\dfrac{1}{2}B'M.MC\\)</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\( = \\dfrac{{3{a^2}\\sqrt 2 }}{2} - \\dfrac{1}{2}.2a.a\\sqrt 2&nbsp; = \\dfrac{{{a^2}\\sqrt 2 }}{2}\\)</p>\n<p>Gọi d l&agrave; khoảng c&aacute;ch từ N đến đường thẳng B&rsquo;M.</p>\n<p>\\(d = \\dfrac{{2{S_{B'MN}}}}{{B'M}} = \\dfrac{{{a^2}\\sqrt 2 }}{{2a}} = \\dfrac{{a\\sqrt 2 }}{2} = \\dfrac{{AA'}}{2}\\)</p>\n<p>Do đ&oacute; mặt cầu đường k&iacute;nh AA&rsquo; tiếp x&uacute;c với đường thẳng B&rsquo;M.</p>"
        }
    ],
    "notice": [],
    "correct_options": ['458'],
}

export const pictureEnglishQuestion = {
    "id": "634a3f4c22f571b10706b7f3",
    "attachment": {
        "questionFile": "",
        "solutionDetailFile": "",
        "audioFile": "https://img.loigiaihay.com/picture/2022/1015/1665810219290-de-3.mp3"
    },
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
            "content": "<p><img src=\"https://img.loigiaihay.com/picture/2022/1015/1665810175050-mceclip0.png\" width=\"559\" height=\"624\" /></p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>Nick is playing football. <em>(Nick đang chơi b&oacute;ng đ&aacute;.)</em></p>\n<p>Alice is reading a book. <em>(Alice đang đọc s&aacute;ch.)</em></p>\n<p>Tom is skating. <em>(Tom đang chơi trượt v&aacute;n.)</em></p>\n<p>Bill is with his dog. <em>(Bill đang ở c&ugrave;ng ch&uacute; ch&oacute; của anh ấy.)</em></p>\n<p>Matt and Dan are catching each other.&nbsp; Matt is wearing a green T-shirt. <em>(Matt v&agrave; Dan đang chơi đuổi bắt. Matt mặc một chiếc &aacute;o m&agrave;u xanh l&aacute; c&acirc;y.) </em></p>\n<p style=\"text-align: justify;\">Jill is wearing a red dress. <em>(Jill đang mặc một chiếc v&aacute;y đỏ.)a</em></p>"
        }
    ],
    "sdk_type": 21,
    "difficult_level": 2,
    "notice": [],
    "content_format": "array",
    "question": [
        {
            "type": "html",
            "content": "<p>Listen and match.&nbsp;</p>"
        }
    ],
    "picture": {
        "url": "https://img.loigiaihay.com/picture/2022/1015/1-0_1.png",
        "coordinates": [
            {
                "correct_text": "Matt",
                "notice": "",
                "x": "214",
                "y": "139",
                "x_percent": "38.49",
                "y_percent": "23.72"
            },
            {
                "correct_text": "Dan ",
                "notice": "",
                "x": "307",
                "y": "128",
                "x_percent": "55.22",
                "y_percent": "21.84"
            },
            {
                "correct_text": "Alice",
                "notice": "",
                "x": "261",
                "y": "260",
                "x_percent": "46.94",
                "y_percent": "44.37"
            },
            {
                "correct_text": "Tom ",
                "notice": "",
                "x": "208",
                "y": "401",
                "x_percent": "37.41",
                "y_percent": "68.43"
            },
            {
                "correct_text": "Bill ",
                "notice": "",
                "x": "362",
                "y": "368",
                "x_percent": "65.11",
                "y_percent": "62.8"
            },
            {
                "correct_text": "Jill ",
                "notice": "",
                "x": "366",
                "y": "288",
                "x_percent": "65.83",
                "y_percent": "49.15"
            }
        ],
        "width": "556",
        "height": "586"
    },
    "options": ["Bill ", "Dan ", "Jill ", "Alice ", "Matt ", "Tom "],
    "correct_options": ["Matt", "Dan ", "Alice", "Tom ", "Bill ", "Jill "],
    "spec_question": 1
}

export const lghCompoundQuestion = {
    "id": "63bfccd2a6f8cf396ef66230",
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
            "content": "<p><span style=\"font-weight: 400;\">Cakes are great! You can make them at home or buy them from a bakery. I like chocolate cakes and my sister likes cakes with </span><strong>fruits </strong><span style=\"font-weight: 400;\">such as mangoes, apples or strawberries. Children drink </span><strong>milk</strong><span style=\"font-weight: 400;\"> or juice with cakes. People often have a cake on their </span><strong>birthday</strong><span style=\"font-weight: 400;\">. On that day, your friends and your </span><strong>family</strong><span style=\"font-weight: 400;\"> gather, and they </span><strong>sing</strong><span style=\"font-weight: 400;\"> the &ldquo;Happy Birthday&rdquo; song for you. It&rsquo;s a lot of fun!</span></p>\n<p><strong><em>Tạm dịch:</em></strong></p>\n<p><em><span style=\"font-weight: 400;\">B&aacute;nh ngọt rất tuyệt! Bạn c&oacute; thể l&agrave;m ch&uacute;ng ở nh&agrave; hoặc mua ch&uacute;ng từ tiệm b&aacute;nh. T&ocirc;i th&iacute;ch b&aacute;nh s&ocirc;-c&ocirc;-la c&ograve;n em g&aacute;i t&ocirc;i th&iacute;ch b&aacute;nh c&oacute; tr&aacute;i c&acirc;y như xo&agrave;i, t&aacute;o hoặc d&acirc;u t&acirc;y. Trẻ em uống sữa hoặc nước tr&aacute;i c&acirc;y với b&aacute;nh ngọt. Mọi người thường c&oacute; một chiếc b&aacute;nh ngọt v&agrave;o ng&agrave;y sinh nhật của họ. V&agrave;o ng&agrave;y đ&oacute;, bạn b&egrave; v&agrave; gia đ&igrave;nh của bạn tụ họp, v&agrave; họ h&aacute;t b&agrave;i &ldquo;Ch&uacute;c mừng sinh nhật&rdquo; cho bạn. N&oacute; thật sự rất vui!</span></em></p>"
        }
    ],
    "solution_suggestion": [
        {
            "type": "html",
            "content": "<p>PPG</p>"
        }
    ],
    "sdk_type": 22,
    "difficult_level": 1,
    "notice": [
        {
            "type": "html",
            "content": "<p>ch&uacute; &yacute; cha</p>"
        }
    ],
    "content_type": "array",
    "display_type": 2,
    "question": [
        {
            "type": "html",
            "content": "<p><strong>Read this. Choose a word from the box to complete the paragraph. There is one example.&nbsp;</strong></p>"
        },
        {
            "type": "html",
            "content": "<p><img src=\"https://img.loigiaihay.com/picture/2023/0112/1673515664548-mceclip0.png\" /></p>"
        }
    ],
    "sub_questions": [
        {
            "id": "clcsv33wr000u377a17vfzqu3",
            "sub_type": "fill_empty",
            "difficult_level": 1,
            "solution_suggestion": [
                {
                    "type": "html",
                    "content": "<p>phương ph&aacute;p giải c&acirc;u 1</p>"
                }
            ],
            "solution_detail": [
                {
                    "type": "html",
                    "content": "<p>SSS111222</p>"
                }
            ],
            "notice": [
                {
                    "type": "html",
                    "content": "<p>ch&uacute; &yacute; con 1</p>"
                }
            ],
            "guide_touch": "Câu hỏi điền vào chỗ trống",
            "question": [
                {
                    "type": "html",
                    "content": "<p><span style=\"font-weight: 400;\">Cakes are great! You can make them at (0) home or buy them from a bakery. I like chocolate cakes and my sister likes cakes with (1) </span></p>"
                }
            ],
            "options": [
                {
                    "id": "clcsv33wr000w377aahteavgx",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">Cakes are great! You can make them at (0) home or buy them from a bakery. I like chocolate cakes and my sister likes cakes with (1) </span></p>"
                        }
                    ],
                    "obj_type": "richText"
                },
                {
                    "id": "clcsv33wr000x377ajasf5pnm",
                    "option_content": "fruits",
                    "obj_type": "inputText"
                }
            ]
        },
        {
            "id": "clcsv5h2s001a377ac654myv2",
            "sub_type": "fill_empty",
            "difficult_level": 1,
            "solution_suggestion": [],
            "solution_detail": [],
            "notice": [],
            "guide_touch": "Câu hỏi điền vào chỗ trống",
            "question": [],
            "options": [
                {
                    "id": "clcsv5h2s001c377ankbrffk2",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">such as mangoes, apples or strawberries. Children drink (2)</span></p>"
                        }
                    ],
                    "obj_type": "richText"
                },
                {
                    "id": "clcsv5h2s001d377al5b6y79c",
                    "option_content": "milk",
                    "obj_type": "inputText"
                }
            ]
        },
        {
            "id": "clcsvmkgo001y377aqrbq4bzb",
            "sub_type": "fill_empty",
            "difficult_level": 1,
            "solution_suggestion": [],
            "solution_detail": [],
            "notice": [],
            "guide_touch": "Câu hỏi điền vào chỗ trống",
            "question": [],
            "options": [
                {
                    "id": "clcsvmkgo0020377atjmylwol",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">&nbsp;or juice with cakes. People often have a cake on their (3)&nbsp;</span></p>"
                        }
                    ],
                    "obj_type": "richText"
                },
                {
                    "id": "clcsvmkgo0021377aygo9hfwh",
                    "option_content": "birthday",
                    "obj_type": "inputText"
                }
            ]
        },
        {
            "id": "clcsvvons000n377a1ky7slgt",
            "sub_type": "fill_empty",
            "difficult_level": 1,
            "solution_suggestion": [],
            "solution_detail": [],
            "notice": [],
            "guide_touch": "Câu hỏi điền vào chỗ trống",
            "question": [],
            "options": [
                {
                    "id": "clcsvvons000p377airw7escu",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">. On that day, your friends and your (4)</span></p>"
                        }
                    ],
                    "obj_type": "richText"
                },
                {
                    "id": "clcsvvons000q377atdna1kyv",
                    "option_content": "family",
                    "obj_type": "inputText"
                }
            ]
        },
        {
            "id": "clcsvyipw000z377a2isn8l6r",
            "sub_type": "fill_empty",
            "difficult_level": 1,
            "solution_suggestion": [],
            "solution_detail": [],
            "notice": [],
            "guide_touch": "Câu hỏi điền vào chỗ trống",
            "question": [],
            "options": [
                {
                    "id": "clcsvyipw0011377a4d02zwf2",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">gather, and they (5)</span></p>"
                        }
                    ],
                    "name": "richText",
                    "obj_type": "richText"
                },
                {
                    "id": "clcsvyipw0012377a15sb8kmx",
                    "option_content": "sing",
                    "name": "inputText",
                    "obj_type": "inputText"
                },
                {
                    "id": "clcsvz8ue0014377atur1d5b2",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><span style=\"font-weight: 400;\">&nbsp;the &ldquo;Happy Birthday&rdquo; song for you. It&rsquo;s a lot of fun!</span></p>"
                        }
                    ],
                    "name": "richText",
                    "obj_type": "richText"
                }
            ]
        },
        {
            "id": "clciugauh002j3577kmm9cup6",
            "sub_type": "quiz",
            "difficult_degree": 2,
            "solution_suggestion": [
                {
                    "type": "html",
                    "content": "<p>&agrave;d</p>"
                }
            ],
            "solution_detail": [
                {
                    "type": "html",
                    "content": "<p>sdc</p>"
                }
            ],
            "notice": [],
            "question_child": [
                {
                    "type": "html",
                    "content": "<p>acbv</p>"
                }
            ],
            "options": [
                {
                    "id": "clciugauh002l357784wf5lzh",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p><img src=\"https://statics.flyer.vn/image/a09f330c62c14df1a63436d56aa549bb\" width=\"165\" height=\"165\" /></p>"
                        }
                    ],
                    "answer_key": "a",
                    "correct": false
                },
                {
                    "id": "clciuho4c002y3577tbqsvhwh",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p>ecdcdec</p>"
                        },
                        {
                            "type": "html",
                            "content": "<p><img src=\"https://img.loigiaihay.com/picture/2023/0105/1672909329993-mceclip0.png\" width=\"91\" height=\"104\" /></p>"
                        }
                    ],
                    "answer_key": "b",
                    "correct": true
                },
                {
                    "id": "clciv1tvm003i3577ozfa7i7u",
                    "option_content": [
                        {
                            "type": "html",
                            "content": "<p>ssqqq</p>"
                        }
                    ],
                    "answer_key": "c",
                    "correct": false
                }
            ]
        }
    ]
}

export const sampleExam = [
    {
        "_id": "5c1a640097d069e1cc924dd8",
        "note": [],
        "related_lesson": [
            {
                "related_id": "",
                "relate_alias": "Định nghĩa hàm số đồng biến, nghịch biến",
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_concept_id": 9927
            }
        ],
        "solution_suggesstion": [],
        "question": {
            "quiz": "1",
            "answers": [
                {
                    "question": "2",
                    "answer_key": "a",
                    "text": [
                        {
                            "content": "<p>H&agrave;m số đồng biến tr&ecirc;n \\(D\\)</p>",
                            "type": "html"
                        }
                    ],
                    "id": "3"
                },
                {
                    "question": "2",
                    "answer_key": "b",
                    "text": [
                        {
                            "content": "<p>H&agrave;m số nghịch biến tr&ecirc;n \\(D\\)</p>",
                            "type": "html"
                        }
                    ],
                    "id": "4"
                },
                {
                    "question": "2",
                    "answer_key": "c",
                    "text": [
                        {
                            "content": "<p>H&agrave;m số kh&ocirc;ng đổi tr&ecirc;n \\(D\\)</p>",
                            "type": "html"
                        }
                    ],
                    "id": "5"
                },
                {
                    "question": "2",
                    "answer_key": "d",
                    "text": [
                        {
                            "content": "<p>H&agrave;m số vừa đồng biến, vừa nghịch biến tr&ecirc;n \\(D\\)</p>",
                            "type": "html"
                        }
                    ],
                    "id": "6"
                }
            ],
            "content": [
                {
                    "content": "<p>Cho h&agrave;m số \\(y = f\\left( x \\right)\\) x&aacute;c định tr&ecirc;n \\(D\\). Nếu với mọi \\({x_1},{x_2} \\in D\\) m&agrave; \\({x_1} &lt; {x_2}\\) ta đều c&oacute; \\(f\\left( {{x_1}} \\right) &lt; f\\left( {{x_2}} \\right)\\) th&igrave;:</p>",
                    "type": "html"
                }
            ],
            "id": "2"
        },
        "difficult_degree": 1,
        "question_type": 1,
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "name": "Tính đơn điệu của hàm số",
            "id": "5af3eae81261631175a05d3c"
        },
        "question_style": {
            "general": 1
        },
        "analytics": {
            "correct": 381,
            "incorrect": 159,
            "skiped": 98,
            "total_answer": 638,
            "percent_false": 40.28213166144201
        },
        "note_types": []
    },
    {
        "_id": "5c2c6a0b45e639bb552756ef",
        "note": [],
        "related_lesson": [
            {
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_alias": "Định lý về tính đơn điệu và dấu của đạo hàm",
                "relate_concept_id": 9928
            }
        ],
        "solution_suggesstion": [
            {
                "content": "<p>Sử dụng định l&yacute;: &ldquo;Nếu \\(f'\\left( x \\right) &gt; 0,\\forall x \\in K\\) th&igrave; h&agrave;m số \\(y = f\\left( x \\right)\\) đồng biến tr&ecirc;n \\(K\\)&rdquo;.</p>",
                "type": "html"
            }
        ],
        "question": {
            "quiz": "1",
            "answers": [
                {
                    "question": "2",
                    "answer_key": "a",
                    "text": [
                        {
                            "content": "<p>Nếu \\(f'\\left( x \\right) &gt; 0,\\forall x \\in R\\) th&igrave; h&agrave;m số đồng biến tr&ecirc;n \\(R\\).</p>",
                            "type": "html"
                        }
                    ],
                    "id": "3"
                },
                {
                    "question": "2",
                    "answer_key": "b",
                    "text": [
                        {
                            "content": "<p>Nếu \\(f'\\left( x \\right) &lt; 0,\\forall x \\in R\\) th&igrave; h&agrave;m số đồng biến tr&ecirc;n \\(R\\).</p>",
                            "type": "html"
                        }
                    ],
                    "id": "4"
                },
                {
                    "question": "2",
                    "answer_key": "c",
                    "text": [
                        {
                            "content": "<p>Nếu \\(f'\\left( x \\right) = 0,\\forall x \\in R\\) th&igrave; h&agrave;m số nghịch biến tr&ecirc;n \\(R\\).</p>",
                            "type": "html"
                        }
                    ],
                    "id": "5"
                },
                {
                    "question": "2",
                    "answer_key": "d",
                    "text": [
                        {
                            "content": "<p>Nếu \\(f'\\left( x \\right) = 0,\\forall x \\in R\\) th&igrave; h&agrave;m số đồng biến tr&ecirc;n \\(R\\).</p>",
                            "type": "html"
                        }
                    ],
                    "id": "6"
                }
            ],
            "content": [
                {
                    "content": "<p>Cho h&agrave;m số \\(y = f\\left( x \\right)\\) x&aacute;c định v&agrave; c&oacute; đạo h&agrave;m tr&ecirc;n \\(R\\). Chọn kết luận đ&uacute;ng:</p>",
                    "type": "html"
                }
            ],
            "id": "2"
        },
        "difficult_degree": 1,
        "question_type": 1,
        "attachment": {
            "audioFile": ""
        },
        "question_style": {
            "general": 1
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5af3eae81261631175a05d3c",
            "name": "Tính đơn điệu của hàm số"
        },
        "analytics": {
            "correct": 1587,
            "incorrect": 156,
            "skiped": 386,
            "total_answer": 2129,
            "percent_false": 25.457961484264914
        },
        "note_types": []
    },
    {
        "_id": "5af3ebabf4ed8c11759c30ca",
        "note": [
            {
                "type": "html",
                "content": "<p>Học sinh c&oacute; thể nhầm lẫn đồ thị đề b&agrave;i cho l&agrave; đồ thị của h&agrave;m số $y = f\\left( x \\right)$ dẫn đến chọn đ&aacute;p &aacute;n A.</p>"
            }
        ],
        "related_lesson": [
            {
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_alias": "Sự đồng biến, nghịch biến của hàm số",
                "relate_concept_id": 5
            }
        ],
        "solution_suggesstion": [
            {
                "type": "html",
                "content": "<p>Khi đạo h&agrave;m của h&agrave;m số mang dấu dương tr&ecirc;n một khoảng th&igrave; h&agrave;m số đồng biến tr&ecirc;n khoảng đ&oacute;.</p>"
            }
        ],
        "question": {
            "quiz": "1",
            "id": "2",
            "content": [
                {
                    "type": "html",
                    "content": "<p>H&igrave;nh dưới l&agrave; đồ thị h&agrave;m số \\(y = f'\\left( x \\right)\\). Hỏi h&agrave;m số \\(y = f\\left( x \\right)\\) đồng biến tr&ecirc;n khoảng n&agrave;o dưới đ&acirc;y?</p>"
                },
                {
                    "type": "image",
                    "url": "https://cdn.vungoi.vn/vungoi/1544174342304_00.PNG",
                    "caption": "",
                    "optUpload": 2,
                    "width": null,
                    "height": null,
                    "quantity": 1
                }
            ],
            "answers": [
                {
                    "question": "2",
                    "id": "3",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {0;1} \\right)\\) v&agrave; \\(\\left( {2; + \\infty } \\right)\\)</p>"
                        }
                    ],
                    "answer_key": "a"
                },
                {
                    "question": "2",
                    "id": "4",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {1;2} \\right)\\)</p>"
                        }
                    ],
                    "answer_key": "b"
                },
                {
                    "question": "2",
                    "id": "5",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {2; + \\infty } \\right)\\)</p>"
                        }
                    ],
                    "answer_key": "c"
                },
                {
                    "question": "2",
                    "id": "6",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {0;1} \\right)\\)</p>"
                        }
                    ],
                    "answer_key": "d"
                }
            ]
        },
        "difficult_degree": 1,
        "question_type": 1,
        "attachment": {},
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5af3eae81261631175a05d3c",
            "name": "Tính đơn điệu của hàm số"
        },
        "question_style": {
            "mobile": 1,
            "general": 2
        },
        "analytics": {
            "correct": 3970,
            "incorrect": 1501,
            "skiped": 307,
            "total_answer": 5778,
            "percent_false": 31.29110418830045
        },
        "note_types": []
    },
    {
        "_id": "5cff18797635f40022d82aeb",
        "note": [],
        "related_lesson": [
            {
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_alias": "Sự đồng biến, nghịch biến của hàm số",
                "relate_concept_id": 5
            }
        ],
        "solution_suggesstion": [
            {
                "type": "html",
                "content": "<p>Xác định khoảng mà đồ thị hàm số đi xuống.</p>"
            }
        ],
        "question": {
            "id": "2",
            "content": [
                {
                    "type": "html",
                    "content": "<p>Cho h&agrave;m số \\(y = f\\left( x \\right)\\) c&oacute; đồ thị như h&igrave;nh vẽ b&ecirc;n. H&agrave;m số \\(y = f\\left( x \\right)\\) nghịch biến tr&ecirc;n khoảng n&agrave;o trong c&aacute;c khoảng sau?</p>"
                },
                {
                    "type": "image",
                    "url": "https://cdn.vungoi.vn/vungoi/1560221759579_37.PNG",
                    "caption": "",
                    "optUpload": 2,
                    "width": "",
                    "height": "",
                    "quantity": 1
                }
            ],
            "answers": [
                {
                    "id": "3",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {0;1} \\right)\\)</p>"
                        }
                    ],
                    "answer_key": "a",
                    "question": "2"
                },
                {
                    "id": "4",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {1;5} \\right)\\).</p>"
                        }
                    ],
                    "answer_key": "b",
                    "question": "2"
                },
                {
                    "id": "5",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {3; + \\infty } \\right)\\).</p>"
                        }
                    ],
                    "answer_key": "c",
                    "question": "2"
                },
                {
                    "id": "6",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>\\(\\left( {1;2} \\right)\\).</p>"
                        }
                    ],
                    "answer_key": "d",
                    "question": "2"
                }
            ],
            "quiz": "1"
        },
        "difficult_degree": 1,
        "question_type": 1,
        "attachment": {
            "audioFile": ""
        },
        "question_style": {
            "mobile": 2,
            "general": 3
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5af3eae81261631175a05d3c",
            "name": "Tính đơn điệu của hàm số"
        },
        "analytics": {
            "correct": 594,
            "incorrect": 233,
            "skiped": 140,
            "total_answer": 967,
            "percent_false": 38.57290589451913
        },
        "note_types": []
    },
    {
        "_id": "60f7e68ae3faf6f4c18bfa8e",
        "chapter": {
            "id": "5af3eae81261631175a05d3c",
            "name": "Sự đồng biến, nghịch biến của hàm số"
        },
        "parent": {
            "id": ""
        },
        "question_style": {
            "general": 1,
            "mobile": 1
        },
        "attachment": {
            "audioFile": ""
        },
        "analytics": {
            "correct": 0,
            "incorrect": 0,
            "skiped": 0,
            "total_answer": 0,
            "percent_false": 0
        },
        "question_type": 1,
        "difficult_degree": 1,
        "question": {
            "id": "2",
            "content": [
                {
                    "type": "html",
                    "content": "<p class=\"MsoNormal\"><strong>Đề thi THPT QG - 2021 - mã 102</strong></p>\n<p class=\"MsoNormal\">Cho hàm số <span class=\"MTConvertedEquation\">\\(y = f\\left( x \\right)\\)</span> có đồ thị là đường cong trong hình bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?</p>\n<p class=\"MsoNormal\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"data:image/png;base64,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\" alt=\"\" width=\"244\" height=\"199\" /></p>"
                }
            ],
            "answers": [
                {
                    "id": "3",
                    "text": [
                        {
                            "type": "html",
                            "content": "<span class=\"MTConvertedEquation\"><span style=\"font-size: 14.0pt; line-height: 115%; font-family: 'Times New Roman','serif'; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-ansi-language: VI; mso-fareast-language: ZH-CN; mso-bidi-language: AR-SA;\">\\(\\left( { - 1;1} \\right)\\)</span></span>"
                        }
                    ],
                    "answer_key": "a",
                    "question": "2"
                },
                {
                    "id": "4",
                    "text": [
                        {
                            "type": "html",
                            "content": "<span class=\"MTConvertedEquation\"><span style=\"font-size: 14.0pt; line-height: 115%; font-family: 'Times New Roman','serif'; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-ansi-language: VI; mso-fareast-language: ZH-CN; mso-bidi-language: AR-SA;\">\\(\\left( { - \\infty ;0} \\right)\\)</span></span>"
                        }
                    ],
                    "answer_key": "b",
                    "question": "2"
                },
                {
                    "id": "5",
                    "text": [
                        {
                            "type": "html",
                            "content": "<span class=\"MTConvertedEquation\"><span style=\"font-size: 14.0pt; line-height: 115%; font-family: 'Times New Roman','serif'; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-ansi-language: VI; mso-fareast-language: ZH-CN; mso-bidi-language: AR-SA;\">\\(\\left( {0;1} \\right)\\)</span></span>"
                        }
                    ],
                    "answer_key": "c",
                    "question": "2"
                },
                {
                    "id": "6",
                    "text": [
                        {
                            "type": "html",
                            "content": "<span class=\"MTConvertedEquation\"><span style=\"font-size: 14.0pt; line-height: 115%; font-family: 'Times New Roman','serif'; mso-fareast-font-family: 宋体; mso-fareast-theme-font: minor-fareast; mso-ansi-language: VI; mso-fareast-language: ZH-CN; mso-bidi-language: AR-SA;\">\\(\\left( {0; + \\infty } \\right)\\)</span></span>"
                        }
                    ],
                    "answer_key": "d",
                    "question": "2"
                }
            ],
            "quiz": "1"
        },
        "solution_suggesstion": [
            {
                "type": "html",
                "content": "<p class=\"MsoNormal\">Quan sát hình vẽ, phần đường cong đi lên là <span class=\"MTConvertedEquation\">\\(f\\left( x \\right)\\)</span> đồng biến, phần đường cong đi xuống là <span class=\"MTConvertedEquation\">\\(f\\left( x \\right)\\)</span> nghịch biến.</p>"
            }
        ],
        "related_lesson": [
            {
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_alias": "Sự đồng biến, nghịch biến của hàm số",
                "relate_concept_id": 5
            }
        ],
        "note": [],
        "note_types": []
    },
    {
        "_id": "5c2c6cff45e639bb55275724",
        "note": [],
        "related_lesson": [
            {
                "chapter_id": "5af3eae81261631175a05d3c",
                "relate_alias": "Sự đồng biến, nghịch biến của hàm số",
                "relate_concept_id": 5
            }
        ],
        "solution_suggesstion": [
            {
                "content": "<p>Sử dụng c&aacute;c đọc BBT: nếu $f'\\left( x \\right) &gt; 0,\\forall x \\in \\left( {a;b} \\right)$ th&igrave; $f\\left( x \\right)$ đồng biến tr&ecirc;n $\\left( {a;b} \\right)$.</p>",
                "type": "html"
            }
        ],
        "question": {
            "quiz": "1",
            "answers": [
                {
                    "question": "2",
                    "answer_key": "a",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>$\\left( {1; + \\infty {\\rm{\\;}}} \\right)$</p>"
                        }
                    ],
                    "id": "3"
                },
                {
                    "question": "2",
                    "answer_key": "b",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>$\\left( {0;3} \\right)$</p>"
                        }
                    ],
                    "id": "4"
                },
                {
                    "question": "2",
                    "answer_key": "c",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>$\\left( { - \\infty ; + \\infty {\\rm{\\;}}} \\right)$</p>"
                        }
                    ],
                    "id": "5"
                },
                {
                    "question": "2",
                    "answer_key": "d",
                    "text": [
                        {
                            "type": "html",
                            "content": "<p>$\\left( {2; + \\infty {\\rm{\\;}}} \\right)$</p>"
                        }
                    ],
                    "id": "6"
                }
            ],
            "content": [
                {
                    "content": "<p>Cho h&agrave;m số $y = f\\left( x \\right)$ c&oacute; bảng biến thi&ecirc;n như sau</p>",
                    "type": "html"
                },
                {
                    "quantity": 1,
                    "height": "",
                    "width": "",
                    "optUpload": 2,
                    "caption": "",
                    "url": "https://cdn.vungoi.vn/vungoi/1546415285028_80.PNG",
                    "type": "image"
                },
                {
                    "content": "<p>H&agrave;m số đ&atilde; cho đồng biến tr&ecirc;n khoảng n&agrave;o dưới đ&acirc;y?</p>",
                    "type": "html"
                }
            ],
            "id": "2"
        },
        "difficult_degree": 2,
        "question_type": 1,
        "attachment": {
            "audioFile": ""
        },
        "question_style": {
            "general": 3,
            "mobile": 2
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5af3eae81261631175a05d3c",
            "name": "Sự đồng biến, nghịch biến của hàm số"
        },
        "analytics": {
            "correct": 258,
            "incorrect": 112,
            "skiped": 27,
            "total_answer": 397,
            "percent_false": 35.012594458438286
        },
        "note_types": []
    },
    {
        "_id": "5d51210272c7660022a84971",
        "question": {
            "quiz": {
                "option": {
                    "items": [
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>A.</strong> \\(\\dfrac{14}{24}\\)</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz83r2mw00023b6hmcsc8kxr"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>B.</strong> \\(\\dfrac{14}{15}\\)</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz83r2mw00033b6hcftmdrg6"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>C.</strong> \\(\\dfrac{21}{25}\\)</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz83r2mw00043b6hn0pqzubv"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>D.</strong> \\(\\dfrac{28}{32}\\)</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz83r2mw00053b6hgy0611kw"
                        }
                    ]
                },
                "content_question": {
                    "items": [
                        {
                            "content": [
                                {
                                    "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/1565596583985_04-03(21).jpg\" width=\"200\" height=\"141\" /></p>\n<p style=\"text-align: center;\">Ph&acirc;n số bằng ph&acirc;n số \\(\\dfrac{7}{8}\\) l&agrave; :</p>",
                                    "type": "html"
                                }
                            ]
                        }
                    ]
                },
                "id": "cjz83r2mv00013b6hvti9pz43"
            },
            "type": 23,
            "name": "Câu Hỏi Một Lựa Chọn",
            "title": {
                "desktop": "Con hãy chọn đáp án đúng nhất"
            },
            "id": "cjz83r2mu00003b6hikxx7sfj"
        },
        "related_lesson": [],
        "note": [],
        "difficult_degree": 2,
        "question_type": 3,
        "solution_suggesstion": [
            {
                "content": "<p>&Aacute;p dụng t&iacute;nh chất cơ bản của ph&acirc;n số : Nếu nh&acirc;n cả tử số v&agrave; mẫu số của một ph&acirc;n số với c&ugrave;ng một số tự nhi&ecirc;n kh&aacute;c \\(0\\) th&igrave; được một ph&acirc;n số bằng ph&acirc;n số đ&atilde; cho.</p>",
                "type": "html"
            }
        ],
        "analytics": {
            "correct": 1055,
            "incorrect": 89,
            "skiped": 5,
            "total_answer": 1149,
            "percent_false": 8.181026979982594
        },
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5d5113f77cb4fe0022717348",
            "name": "Đề thi khảo sát chất lượng đầu năm - Đề số 1"
        },
        "note_types": []
    },
    {
        "_id": "5d51226d72c7660022a8497e",
        "question": {
            "quiz": {
                "option": {
                    "items": [
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>A.</strong>&nbsp;20</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84m21y00023b6h0hg3h7gu"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>B.&nbsp;</strong>200</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84m21z00033b6hd1b09gpn"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>C.</strong> 2000</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84m21z00043b6h225wkk1o"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>D.</strong> 20 000</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84m21z00053b6hbgcvd08n"
                        }
                    ]
                },
                "content_question": {
                    "items": [
                        {
                            "content": [
                                {
                                    "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/1565598026451_b4...jpg\" alt=\"\" width=\"175\" height=\"131\" /></p>\n<p style=\"text-align: center;\">2 tạ&nbsp; = &hellip; kg.</p>\n<p style=\"text-align: center;\">Số th&iacute;ch hợp để điền v&agrave;o chỗ chấm l&agrave; :<br /><br /></p>",
                                    "type": "html"
                                }
                            ]
                        }
                    ]
                },
                "id": "cjz84m21y00013b6hdl0893jt"
            },
            "type": 23,
            "name": "Câu Hỏi Một Lựa Chọn",
            "title": {
                "desktop": "Con hãy chọn đáp án đúng nhất"
            },
            "id": "cjz84m21x00003b6hpqoal9mb"
        },
        "related_lesson": [],
        "note": [],
        "difficult_degree": 2,
        "question_type": 3,
        "solution_suggesstion": [
            {
                "content": "<p>&Aacute;p dụng c&aacute;ch chuyển đổi 1 tạ = 100kg để đổi 2 tạ sang số đo c&oacute; đơn vị l&agrave; ki-l&ocirc;-gam.</p>",
                "type": "html"
            }
        ],
        "analytics": {
            "correct": 1075,
            "incorrect": 69,
            "skiped": 5,
            "total_answer": 1149,
            "percent_false": 6.440382941688425
        },
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5d5113f77cb4fe0022717348",
            "name": "Đề thi khảo sát chất lượng đầu năm - Đề số 1"
        },
        "note_types": []
    },
    {
        "_id": "5d5124a872c7660022a8499e",
        "question": {
            "quiz": {
                "option": {
                    "items": [
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>A.</strong> 4352</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84t6ec00023b6hdq1mvitz"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>B.</strong> 3405</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84t6ec00033b6hlkuvxqm6"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>C.</strong> 8424</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84t6ec00043b6hig24mr8j"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON_CHECK_BOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "<p><strong>D.</strong> 2737</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjz84t6ec00053b6hkflqt7qd"
                        }
                    ]
                },
                "content_question": {
                    "items": [
                        {
                            "content": [
                                {
                                    "type": "html",
                                    "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/1565598405044_a(28).jpg\" alt=\"\" width=\"160\" height=\"188\" /></p>\n<p style=\"text-align: center;\">Trong c&aacute;c số: 4352; 3405; 8424; 2737, số chia hết cho 9 l&agrave; :</p>"
                                }
                            ]
                        }
                    ]
                },
                "id": "cjz84t6ec00013b6h2h725v7j"
            },
            "type": 23,
            "name": "Câu Hỏi Một Lựa Chọn",
            "title": {
                "desktop": "Con hãy chọn đáp án đúng nhất"
            },
            "id": "cjz84t6eb00003b6h3a65fi5w"
        },
        "related_lesson": [],
        "note": [],
        "difficult_degree": 2,
        "question_type": 3,
        "solution_suggesstion": [
            {
                "content": "<p>T&iacute;nh tổng c&aacute;c chữ số của từng số rồi &aacute;p dụng dấu hiệu chia hết cho 9 : c&aacute;c số c&oacute; tổng c&aacute;c chữ số chia hết cho 9 th&igrave; chia hết cho 9.</p>",
                "type": "html"
            }
        ],
        "analytics": {
            "correct": 978,
            "incorrect": 167,
            "skiped": 4,
            "total_answer": 1149,
            "percent_false": 14.882506527415144
        },
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5d5113f77cb4fe0022717348",
            "name": "Đề thi khảo sát chất lượng đầu năm - Đề số 1"
        },
        "note_types": []
    },
    {
        "_id": "5b89f8ec6bbcbce52beaed36",
        "question": {
            "quiz": {
                "option": {
                    "items": [
                        {
                            "obj_evt": {
                                "chooseType": 2,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "HTML+CHECKBOX",
                            "obj_type": "choiceRow",
                            "answer": [
                                {
                                    "content": "<p style=\"text-align: left;\">Số liền sau của số $889$ l&agrave; $890$</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjliskac100033y65d7yvaa7i"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 2,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "HTML+CHECKBOX",
                            "obj_type": "choiceRow",
                            "answer": [
                                {
                                    "content": "<p style=\"text-align: left;\">Số liền sau của số $449$ l&agrave; $448$</p>",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjliskac100043y65syi6xe5m"
                        },
                        {
                            "id": "answer_cjlxdludg000u3169fyyufpop",
                            "answer": [
                                {
                                    "type": "html",
                                    "content": "<p>Số liền trước của số $123$ l&agrave; $122$</p>"
                                }
                            ],
                            "obj_type": "choiceRow",
                            "obj_evt": {
                                "chooseType": 2,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "HTML+CHECKBOX"
                        }
                    ]
                },
                "content_question": {
                    "items": [
                        {
                            "content": [
                                {
                                    "content": "<p style=\"text-align: center;\"><img src=\"https://cdn.vungoi.vn/vungoi/1540091479776_Donut_1.png\" width=\"150\" height=\"150\" /></p>",
                                    "type": "html"
                                },
                                {
                                    "content": "<p style=\"text-align: center;\">T&iacute;ch v&agrave;o &ocirc; trống Đ&uacute;ng hoặc Sai của mỗi nhận x&eacute;t sau:</p>",
                                    "type": "html"
                                }
                            ]
                        }
                    ]
                },
                "id": "cjliskac100023y65mnhgru7r"
            },
            "type": 5,
            "name": "Câu Hỏi Đúng Sai Dạng Cột",
            "title": {
                "desktop": "Con hãy tích vào ô đúng hoặc sai cho mỗi câu (khẳng định)  dưới đây."
            },
            "id": "cjliskac100013y65yxyxvpv6"
        },
        "related_lesson": [],
        "note": [
            {
                "content": "<p style=\"text-align: left;\">C&oacute; thể ghi nhớ số liền trước, liền sau của một số bằng c&aacute;ch nghĩ:</p>\n<p style=\"text-align: left;\">- Số liền sau l&agrave; số liền ngay ph&iacute;a sau của số đ&atilde; cho.</p>\n<p style=\"text-align: left;\">- Số liền trước l&agrave; số đứng ngay ph&iacute;a trước của số đ&atilde; cho.</p>",
                "type": "html"
            }
        ],
        "difficult_degree": 3,
        "question_type": 3,
        "solution_suggesstion": [
            {
                "content": "<p style=\"text-align: left;\">Từ đề b&agrave;i, x&aacute;c định c&aacute;c số liền trước hoặc liền sau của số đ&atilde; cho.</p>\n<p style=\"text-align: left;\">Nhớ lại kiến thức:</p>",
                "type": "html"
            },
            {
                "optUpload": 2,
                "caption": "",
                "url": "https://cdn.vungoi.vn/vungoi/1535768611593_cau_7.png",
                "type": "image",
                "width": 300,
                "height": 150,
            }
        ],
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5b7e5f4570d10c855f4ecbc6",
            "name": "Đọc, viết, so sánh các số có ba chữ số"
        },
        "analytics": {
            "correct": 1209,
            "incorrect": 221,
            "skiped": 10,
            "total_answer": 1440,
            "percent_false": 16.041666666666668
        },
        "note_types": []
    },
    {
        "_id": "5b91e9236bbcbce52beb224c",
        "question": {
            "quiz": {
                "option": {
                    "items": [
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON+CHECKBOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "Đúng",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjlrel8e400022y673a81qd50"
                        },
                        {
                            "obj_evt": {
                                "chooseType": 1,
                                "type": "choice"
                            },
                            "optionTypeIndex": 0,
                            "name": "BUTTON+CHECKBOX",
                            "obj_type": "choiceButton",
                            "answer": [
                                {
                                    "content": "Sai",
                                    "type": "html"
                                }
                            ],
                            "id": "answer_cjlrel8e400032y67r7ep6qnl"
                        }
                    ]
                },
                "content_question": {
                    "items": [
                        {
                            "content": [
                                {
                                    "content": "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://cdn.vungoi.vn/vungoi/1536288805761_true_or_false.jpg\" alt=\"\" width=\"200\" height=\"134\" /></p>",
                                    "type": "html"
                                },
                                {
                                    "content": "<p style=\"text-align: center;\">Số $555$ đọc l&agrave; năm trăm lăm mươi lăm.</p>",
                                    "type": "html"
                                }
                            ]
                        }
                    ]
                },
                "id": "cjlrel8e400012y67oe46zyxd"
            },
            "type": 1,
            "name": "Câu Hỏi Đúng Sai",
            "title": {
                "mobile": "",
                "desktop": "Con hãy lựa chọn đáp án Đúng hoặc Sai"
            },
            "id": "cjlrel8e300002y67cveqhca1"
        },
        "related_lesson": [],
        "note": [
            {
                "content": "<p>- C&aacute;ch đọc v&agrave; viết số c&oacute; ba chữ số.</p>\n<p>- Ph&acirc;n biệt trường hợp cần đọc l&agrave; \"năm\" hay \"lăm\" với số c&oacute; chữ số \\(5\\).</p>",
                "type": "html"
            }
        ],
        "difficult_degree": 1,
        "question_type": 3,
        "solution_suggesstion": [
            {
                "content": "<p>Đọc số đ&atilde; cho từ phải sang tr&aacute;i: Chữ số h&agrave;ng trăm gh&eacute;p với từ \"trăm\"; chữ số h&agrave;ng chục gh&eacute;p với từ \"mươi\" rồi đến chữ số h&agrave;ng đơn vị.</p>",
                "type": "html"
            }
        ],
        "attachment": {
            "audioFile": ""
        },
        "parent": {
            "id": ""
        },
        "chapter": {
            "id": "5b7e5f4570d10c855f4ecbc6",
            "name": "Đọc, viết, so sánh các số có ba chữ số"
        },
        "analytics": {
            "correct": 1160,
            "incorrect": 277,
            "skiped": 7,
            "total_answer": 1444,
            "percent_false": 19.667590027700832
        },
        "note_types": []
    }
]