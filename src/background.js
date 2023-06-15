const backgrounds = [
  {
    title: 'Flufy Checking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit fuga. Sed nihil aliquam molestiae quo voluptatum veritatis fuga mollitia quisquam odio dolore, quia quam rem consequuntur doloribus dicta? Ab.',
    image:
      'https://ams01pap001files.storage.live.com/y4mtcRTZ-LZM2x4bgf0CwJO12Kout08kxtnSHQ8J0afI5boAJ2J_eXlCS5v_WvMbA5TFB_1Yx_809tLJm2I_6UshWyFxNtlhlSgpEcPac5s9G1GjiQYImkU8GicWgEHAO7QLfZb8smfl88YlvEDLNoY7iDT_VZo-0Xucynd8sCjQRCPUCeR6ST8CRcJF3BE1EciGZiTc0QeAvD36Ed6BOJY3uOAlK1qyNoJN3iwl4HYKuk?encodeFailures=1&width=371&height=414',
  },
  {
    title: 'EmojiGroup',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iste nihil rerum harum, ratione ut adipisci debitis velit inventore natus id reprehenderit molestiae minus dolorum cupiditate neque sed unde placeat.',
    image:
      'https://ams01pap001files.storage.live.com/y4mZcnmJVU6IzbzEJG9rRLlx1AtPpHP7ii04zw7KHsIBPoLwjamqnsjflQ3WdhVB8hvSrKlPYwUHVnwQhYlyXsZH854j8lB7UM6_z9Q3CV3OlMbm2QLCcK1LKVS47g_uHF8yVIvxtkCqOj4m3aY_sLwWEPOzNNRVKClRmgg8M5BsZsCXle2sXMhqdtFqkDy_ZXLFEnJUrAs19YQsy0M5RdxSb4eQ-9QTqbfsk0T7boDsig?encodeFailures=1&width=604&height=894',
  },
  {
    title: 'Fluffy Happy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora praesentium in, modi debitis neque accusantium minima rerum asperiores vitae, at dignissimos ipsam, culpa tempore earum laboriosam repellat! Illum, ut dicta. ',
    image:
      'https://ams01pap001files.storage.live.com/y4mvjV__x5ub2-754r1t7i2kdsPwiQVWjRPsIXLh8tO-dqsfPQTbZSDiDT5za8e07ti5QXycbo_zxNqdwWfo3uGsGIUGyU4yWnJiHfE81QgPaBoow4VQc1omEyGTyP1lZ3JRV0q8r0OvmwP-ADVWv7t3OAJpNZmMvSNuCjb1BjSwaP8z6RiTS8ZOsLBmPdR-KU9qR3c54R_-_KgJj-04Qz25M-hSGp3X-SjuCFThRQ1ITY?encodeFailures=1&width=371&height=414',
  },
  {
    title: 'Nipsy Hustle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus repellat veritatis quaerat ipsam et perferendis sequi, deleniti placeat labore tempora voluptas, ex ad, non ipsum eum voluptatum. Similique, veritatis recusandae.',
    image:
      'https://ams01pap001files.storage.live.com/y4m1dcc6j26T_3n7HoHqH0Qx1sQfA3srYYfhReuHe9ZnUYAnEOZB_kKXD3TC2Q9VW7DGNvNCqlA68PjDIobNhkVb6MmLcrJ8mFy3yWdOb3ZpFmmXhd2QNHdfQ-zNg9wtpmLjnOrrtnPWOKpFH2_tWi45qURZfVNtQUDykKwvAux4m-5uyaCY-v-tAeOVAoxpRt3W48gkntSfHz7tJBtKcIhltFH81yTF9ZznL8gbos4kEg?encodeFailures=1&width=212&height=223',
  },
  {
    title: 'Digital Paint',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium itaque iste, pariatur quibusdam, eius porro, nulla natus soluta blanditiis dolorum! Tenetur velit qui architecto labore distinctio adipisci mollitia ullam?',
    image:
      'https://ams01pap001files.storage.live.com/y4mvuGF8sWfR6qK_i7hjUJg3OKLphelBqqIPR-4JJk7TSWA-IeiaBvBUmu7h03PDIYq1TkNR-1gIVlhne8Lu_FcKyvBPn2yfPEd_yLNkeADqRRalZWsDS9t5evxF37Ibrm9a7iG9pgiC6_c6e5NaTcMVFUqArtq2ziH9LUPXFDlIIVwok54mxXY6UQCYiw5Hh4r0tUDAN2pjCrCkPW8Slv3RPnALpibubCbFTc4rq2FgKE?encodeFailures=1&width=573&height=894',
  },
  {
    title: 'Hold Eye',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat quam sit porro. Doloremque aliquam esse eligendi, aperiam, sequi in vero commodi, impedit reiciendis error nulla ipsum eum maiores odit.',
    image:
      'https://ams01pap001files.storage.live.com/y4mqQ44urdGV7fhhVa6A4q3_0-7rpBnnNg3tkMuBFG64uPLN_WbatL2O5YEko5fseYwxj0-2PQog2EgS3WC48vVFMnA2lGhciakL5HARlxxLWlbiK7GT2uqdwEFI-MqUumhD_0LOwIO97MPvWh-A5mFF-B9fIBYpitVeoYrE3l-PKTlli-hOZotWB-uorYf8oqhWSiE4CQrLiQVdLc_hDsJSqDeMNBCdtx6EXxJdIRvNXQ?encodeFailures=1&width=604&height=894',
  },
  {
    title: 'Black Girl Magic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis pariatur culpa rem? Animi culpa similique dolorem beatae vero, labore placeat, sed debitis hic commodi cum illum nobis ducimus aspernatur officia.',
    image:
      'https://ams01pap001files.storage.live.com/y4mZgf2_JAKIskE_v_jA2zmTAn5poOUc3KdHmFu7_Ga_ytQvk8M9MfflncNFwmxHYiPXACq5TSe3jVhkqu0LupJiQPZSaVjMuBGvbws8aayTNJya2dJk12-utCAW0mqQ4j8aKfMVXipG8fe6b1VEa25ei_2JYPeppwKH36NHMPgSChqB3JSJ4SyrMau9CAgbDRhjsmRPw9-dpom0-hvVGijpd8I3134FAu1SIZZXv6xPd4?encodeFailures=1&width=595&height=894',
  },
  {
    title: 'Micheal B. Jordan.',
    description:
      'Animi culpa similique dolorem beatae vero, labore placeat, sed debitis hic commodi cum illum nobis ducimus aspernatur officia.',
    image:
      'https://ams01pap001files.storage.live.com/y4mfaBapX4EBgVYPOwTr0yrEn_w_bDDa52ygSFzi0Qo_QF_n_R3E8sk1Hm1xNc5ynKpG-plu3_ZxDwgavzi5KZPDM4DTYei_4QnkyW6JMEaK9C9jP6ngDUfzIFsi_FqVdK3inih-PFb-WvgLlxyLDVkrObndRogN2qXZr6gGyzTW5W4nJWeR7G2TIHY4rXbk9eHtuT5V-jborNiRCOSSmFdScmB67MPGNgLI4oSp8PChUg?encodeFailures=1&width=1192&height=894',
  },
];

export default backgrounds;
