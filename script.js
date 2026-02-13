const aliens = [
    {
        name: "HEATBLAST",
        species: "PYRONITE",
        planet: "PYROS",
        img1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.AwCtntVNPIvg05CTaSB56wHaEK%3Fpid%3DApi&f=1&ipt=daa83728cdd750ced67b0389be61c8855051a9f65f10ab4a8b60f7f34065a763&ipo=images",
        img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.W2KLDFCiBql89W5nrpdkRwHaEK%3Fpid%3DApi&f=1&ipt=cfd1379bbbab72e781fa180d580dc0b7a5ad8d6527e3737c1af44a98e6fdb936&ipo=images",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20131012092051%2Fben10%2Fimages%2F2%2F20%2FHeatblast_omniverse_official.png&f=1&nofb=1&ipt=379aac48e1eaeec89e802a02a2ec6d2e4248e51c0904d9fac0e86eec7e16e12e",
    },
    {
        name: "DIAMONDHEAD",
        species: "PETROSAPIEN",
        planet: "PETROPIA",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.BEFyxisO6myjLMnIy_Bm_gHaEK%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=265cdb723bddaf262c1e3bf149fdac624798a8c9d4936ad7bd6005d227c93295&ipo=images",img2:"https://wallpapercave.com/wp/wp11351767.jpg",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fben10%2Fimages%2Fa%2Fab%2FDiamondhead_os.png%2Frevision%2Flatest%3Fcb%3D20141231142005&f=1&nofb=1&ipt=678e206613ca6404a80262f3ae7d3799758c308161f5a85d965b87a0f2c25a99",
    },
    {
        name: "FOUR ARMS",
        species: "TETRAMAND",
        planet: "KHOROS",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.LyK2gV-C1n9kClTWExcSUwHaEK%3Fpid%3DApi&f=1&ipt=58d4644f38f49d6b32fd03d361be6196f53635b3a317b1b2d21cbf499d1c3d83&ipo=images",img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F7019049.png&f=1&nofb=1&ipt=ba90f6bb99f970f0f717bd42b3146cd7999336b27c6d2e4ed1dc4de64091efbf",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngfre.com%2Fwp-content%2Fuploads%2FBen-10-7-640x1024.png&f=1&nofb=1&ipt=357f42f7d6325a28f6a9d94e16b3ba49693093a5860e6b9c13b346bec7cb093e",
    },
    {
        name: "XLR8",
        species: "KINECELERAN",
        planet: "KINET",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.LOP6WXCDD1S7hkB-BHcc9wHaEK%3Fpid%3DApi&f=1&ipt=5f7356713f42a9391557f7a65acb3a588f5933dca14956409a60bbb92fe32ec2&ipo=images",
        img2:"https://wallpapercave.com/wp/wp6635635.png",
        image: "https://www.pikpng.com/pngl/b/190-1906134_xlr8-de-ben-10-clipart.png",
    },
    {
        name: "UPGRADE",
        species: "MECHAMORPH",
        planet: "GALVAN B", 
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.mohD_EHgpFno2vi1i1DqnQHaF7%3Fcb%3Ddefcache2%26pid%3DApi%26defcache%3D1&f=1&ipt=8753c99d7f26cd2efe0f94dfa77bf5280b36eae52e1368665c844635e97ec53d&ipo=images",
        img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10omniverseref%2Fimages%2Fc%2Fc1%2FUpgrade.PNG%2Frevision%2Flatest%3Fcb%3D20130512173716&f=1&nofb=1&ipt=9ed4d92d8acd32f14900ee47baefae332e7c3c9b628aa8c9edd8e49d84ca9790",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F6%2F62%2FUpgrade_Model.png%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20200511092500&f=1&nofb=1&ipt=4f95f6470da50afe209ebc4b593adf6042956f2bb747967596a1c745d5bd7692",
    },
    {
        name: "STRINGFLY",
        species: "Lepidopterran",
        planet: " Lepidopterra",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.S-120VUm9I9ziM_mcnAZewHaEK%3Fpid%3DApi&f=1&ipt=7de2d048f8075a60b2938bf81e8686718a47b67b0ebcce6ab7b55ec507950711&ipo=images",img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.S-120VUm9I9ziM_mcnAZewHaEK%3Fpid%3DApi&f=1&ipt=7de2d048f8075a60b2938bf81e8686718a47b67b0ebcce6ab7b55ec507950711&ipo=images",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fb10mv%2Fimages%2F5%2F5d%2FStinkfly_Fig.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20221220211026&f=1&nofb=1&ipt=2d50e73d4e45b4d34a90ae49c04a08d820ed5153553168507834ad7b9f200d09",
    },
    {
        name: "WOILDMUTT",
        species: "Vulpimancer",
        planet: " Vulpin",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.ZmDN5QhXLHR80oRuM9vOTQHaEK%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=b8c3ecc66dc4a715252935fbaab6f6f8bf863cdbe469f6dd913295ade3567094&ipo=images",img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.oSlaLWJL8MCKwys5BS5V6QHaFl%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=42052b99da05552c339b0fd34113108175d737b78f21fc9e213cde306d5f2429&ipo=images",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F119-1195955_ben-10-alien-characters-ben-10-aliens-wildmutt.png&f=1&nofb=1&ipt=47ee01639ed948dcea864cc9926aae4de68d02448ced5a6a452246d1f8728cb9",
    },
    {
        name: "RIPJAWS",
        species: "Piscciss Volann",
        planet: " Piscciss",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.fkxGamB8hm-ybqRRt8zRtQAAAA%3Fpid%3DApi&f=1&ipt=9fb6b316cf2ac4db6a3b6405a6951a85ebf769551956ee059eacb5a2a7dc2b84&ipo=images",img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fbe6xYUGksMU%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=5f1701967cb3512896889f19951f4ac517fd5d7d19ddbb8c2f626c69bf8eec28",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2F9%2F98%2FRipjaws.png%2Frevision%2Flatest%3Fcb%3D20140822023344&f=1&nofb=1&ipt=b0a553da654067d43d92fe8b7fe1298862ea9e632aaaf2a513073f319237b411",
    },
    {
        name: "GHOSTFREAK",
        species: "Ectonurite",
        planet: " Anur Phaetos",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.dT0hOFERxnUTECNkIGqKxwHaEK%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=dc4c04e1e05b0e58b8aed6e09d5bd34a7844b1ac6442b0a1fc39171260bd86d2&ipo=images",img2:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.uhct2w_WEsNJBkBnPQ0SWAHaDt%3Fcb%3Ddefcachec2%26pid%3DApi&f=1&ipt=60e07cebd85d3121cc215d482f5caade1888270039472020caf5fb6e7832c105&ipo=images",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2Fa%2Fa3%2FGhostfreakPose2.png%2Frevision%2Flatest%3Fcb%3D20171019164933&f=1&nofb=1&ipt=d2db04a4e08b7828f5d704512185259b5dc44488b3e16fb961342dbbac73a1b9",
    },
    {
        name: "GRAYMATTER",
        species: "Galvan",
        planet: "Galvan Prime",
        img1:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP._2C70vrmeZXp2olHnTGNHQHaEK%3Fpid%3DApi&f=1&ipt=4d22527353ab52a688501ebfc3b352bbe4297cabb9c4dd571bd7d9d19f33cc23&ipo=images",img2:"https://m.media-amazon.com/images/M/MV5BZTJmYWU2ZWItOTUyYi00ZjBiLTgzOWQtZTkxMjg5MmZlZjZlXkEyXkFqcGc@._V1_.jpg",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fben10%2Fimages%2F1%2F1d%2FGrey_matter_profile.png%2Frevision%2Flatest%3Fcb%3D20120207221638&f=1&nofb=1&ipt=38f764f197e9496cbc2c14abfc237d4422a754a5939fb0d38e5ca81bb40f3ddb",
    },
    {
        name: "CONNONBOLT",
        species: "Arburian Pelarota",
        planet: "Arburia",
        img1:"https://m.media-amazon.com/images/M/MV5BMTY2ODYxNDA0M15BMl5BanBnXkFtZTgwMjczNjM2MjE@._V1_.jpg",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3e1qTHoZsCxFdAraQl8_dS_EZHd_FL6kFA&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F1%2F15%2FCannonbolt.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20210314014123&f=1&nofb=1&ipt=698bb1dddcab2bc1af54d594499522bb93066881212e8246231851a9ad0ab6b9",
    },
    {
        name: "SWAMPFIRE",
        species: "Methanosians",
        planet: "Methanos",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVAWxS25yjSbomSBKY7teJoSq-fITnXAKKg&s",img2:"https://media.tenor.com/nTsTROdBoIkAAAAe/ben-10-ben-10-swampfire.png",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2Fd%2Fd0%2FSwampfire_uaf_official.png%2Frevision%2Flatest%3Fcb%3D20250520080341&f=1&nofb=1&ipt=7645fdaa3cf1be39045e57c66485267f2bf450370960b22d442685e9306acb7e",
    },
    {
        name: "ECHO ECHO",
        species: " Sonorosian",
        planet: "Sonorosia",
        img1:"https://i.ytimg.com/vi/CFxclFi_J-I/maxresdefault.jpg",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNDaiJoklHxZNXjoVq4qRdGrncrKsjsAP4w&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F5a944a849fc609199d0fef0d.png&f=1&nofb=1&ipt=d947eb4386ae1ed1902b13ff1e1fd2e59d7d3a26dd3493e13483ddce89af76ad"
    },
    {
        name: "HUMUNGOUSAUR",
        species: " Vaxasaurian",
        planet: "Terradino",
        img1:"https://i.ytimg.com/vi/j7hPYbI0WlM/maxresdefault.jpg",img2:"https://ben10hero.com/wp-content/uploads/2016/10/b10r2_512.png",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20141129040033%2Fben10%2Fimages%2F4%2F4c%2FHumungousaur_uaf_render.png&f=1&nofb=1&ipt=3721d9f516152cf7f50469fe313b5fba2e303eb73fb3709239889e30d69f3248",
    },
    {
        name: "JETRAY",
        species: "Aerophibian",
        planet: "Aeropela",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mlK0-ufg3ukT01D39YpaKZ0xYB9gcdCo2g&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYPSLkAJ790QRcu5YysIT9M3PfIizRZgs6g&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F6%2F61%2FJetrayProfilePicture.png%2Frevision%2Flatest%3Fcb%3D20200921154751&f=1&nofb=1&ipt=75ea820b7ce8bdb24dbc40376be69c35d15dce2e56550868a1e2c00a9e587ba5",
    },
    {
        name: "CHROMASTONE",
        species: "Crystalsapien",
        planet: "Petropia",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pR2LkGZpXRNvRTLCZP0DZea_ZPm1koaFYw&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ScCyT8DGnboDb8tgzf3Ul7X1QXXK2MMTYQ&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg00.deviantart.net%2F533d%2Fi%2F2019%2F129%2F6%2F6%2Fben_10_war_of_the_aliens__chromastone_by_burningeagle171340-dd02w5b.png&f=1&nofb=1&ipt=9afba1cde55be987ae64613ad28deccbadf40099d82fc18967dd78c3facd725d",
    },
    {
        name: "BRAINSTORM",
        species: "Cerebrocrustacean",
        planet: "Encephalonus IV",
        img1:"https://ben10hero.com/wp-content/uploads/2016/11/ppr_325.png",img2:"https://wallpapercave.com/wp/wp10659874.png",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20140430201111%2Fben10%2Fimages%2F8%2F84%2FBrainstorm.png&f=1&nofb=1&ipt=7a46a9e4d7f700c606962c3ec2df53310fbed0596c3325051462d3cac86693db",
    },
    {
        name: "SPIDERMONKEY",
        species: " Arachnichimp",
        planet: " Arachnichimmia",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6OkO5MWqdhwQQOiKftsibmBXN4ROEserIQ&s",img2:"https://ben10hero.com/wp-content/uploads/2016/11/bk_337.png",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F8%2F84%2FSpidermonkey_UAF.png%2Frevision%2Flatest%3Fcb%3D20210320001700&f=1&nofb=1&ipt=0c18922f3a220da0f3517de23e0717be855b7760cd1224f41d997e2dacc06e4a",
    },
    {
        name: "BIG CHILL",
        species: " Necrofriggian",
        planet: " Kylmyys",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvTfxLx9XdLEGA0s4DA0BM4hQmvMK8Xq7g&s",img2:"https://preview.redd.it/big-chill-babies-v0-lebkwrrf5r2b1.jpg?width=466&format=pjpg&auto=webp&s=8d55476f7e15d861823c49d0c11fd46683b0c7fa",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2F0%2F00%2FBig_chill_(AF)_official_cloaked.png%2Frevision%2Flatest%2Fscale-to-width-down%2F2000%3Fcb%3D20180930021402&f=1&nofb=1&ipt=e3d1e858e4586a944c4e21d8a3fd845855c434768998b6cba22fa08e8a750ffb",
    },
    {
        name: "GOOP",
        species: " Polymorph",
        planet: " Viscosia",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTBTuGwL3qyWfM8LNXWSR0diHI95w8ZSrzQ&s",img2:"https://i.ytimg.com/vi/vpv-EbQK1aY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQFWM4p-B4N71awfGkPPa-eXkNHA",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fthumbs%2F5a944b019fc609199d0fef17.png&f=1&nofb=1&ipt=db3ec2a51f6e6c9a41ca836addfefa49f6e0eb93cb84463436512c44f0933dbc",
    },
    {
        name: "ALIAN X",
        species: "Celestialsapien",
        planet: " Celestialsapieant",
        img1:"https://ben10hero.com/wp-content/uploads/2016/12/celestial.png",img2:"https://comicvine.gamespot.com/a/uploads/original/11149/111497477/7968501-5921839544-main-qimg-10bbf89021436706da6523ca2785d00f.gif",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2Fe%2Fee%2FAlien_X_2.png%2Frevision%2Flatest%3Fcb%3D20210314022316&f=1&nofb=1&ipt=de5591cdae3b6edcd976b8faf87aabfb3576da59b9be3a9bf8130dfe541fe801"
    },
    {
        name: "LODESTAR",
        species: "Biosovortian",
        planet: " Biosovortianions",
        img1:"https://preview.redd.it/lodestar-an-underrated-alien-with-a-misunderstood-ability-v0-4wjjn3meh0de1.jpeg?auto=webp&s=a9c264b73ac1521b46f7a679e67799612308887a",img2:"https://ben10hero.com/wp-content/uploads/2016/12/hu_299.png",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.wikia.com%2Fben10%2Fimages%2F1%2F1c%2FLodestar.png&f=1&nofb=1&ipt=fdb6feca07a02ca6cce98512f16ae596df6eb41855a0a716a237c41ee70d8bdb",
    },
    {
        name: "LODESTAR",
        species: "Appoplexian",
        planet: " Appoplexia",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lZrpumJYDW0ie7Qn7HNk6W-vhRmwO6i5bg&s",img2:"https://ben10hero.com/wp-content/uploads/2017/01/pn775im_165.png",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20140821235603%2Fben10%2Fimages%2F5%2F56%2FRath_1.png&f=1&nofb=1&ipt=3edae983728f066dbbbaf1a57ecf5c78704f426eec208f1131f359e3b7f80e0b",
    },
    {
        name: "NONOMECH",
        species: "Nanochip",
        planet: " Nanochipinst",
        img1:"https://i.redd.it/why-doesnt-nanomech-get-much-love-in-the-fandom-i-always-v0-5ata4ka4cruf1.png?width=640&format=png&auto=webp&s=93388d75b2171934856195e7470ce3a396e49be0",img2:"https://i.redd.it/nanomech-is-actually-very-powerful-v0-pnvnpjeug0ee1.jpg?width=1170&format=pjpg&auto=webp&s=709678d294daeaafa89c8a9a81383405ce45f4ab",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20140518111742%2Fben10%2Fimages%2Fa%2Fa3%2FNanomech_Ultimate_Alien.png&f=1&nofb=1&ipt=942bb29a92bbdeed6c2d71f5ee08e45a76c4ca3be6c09b4f978aee077cf6b767",
    },
    {
        name: "MURK UPCHUCK",
        species: "Murk Gourmand",
        planet: " Peptos XI",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwZIWCvA3OdBUcL_fj9REl_jxqvb_CJSapQ&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjTfZYGxqsbcZaoBWT_vugawFhGkm05ZtdA&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fami.animecharactersdatabase.com%2Fuploads%2Fchars%2F38889-323647429.png&f=1&nofb=1&ipt=fc8263beb02ac240d8a1b561b03b14d2a4d4f58d3f0824bd97e5541df65195d3",
    },
    {
        name: "WAY BIG",
        species: "To'kustar",
        planet: "Cosmic Storms",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogrIuB0-cWUzW7FNBDi017ovD9bubWiU8tg&s",img2:"https://preview.redd.it/what-color-of-way-bigs-laser-do-you-prefer-v0-kewbvc44265c1.jpg?width=960&format=pjpg&auto=webp&s=fd8074a0938eae023aed9dbcf21d9e11551847f8",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2Fd%2Fd4%2FWay_Big_OV_Artwork.PNG%2Frevision%2Flatest%3Fcb%3D20210515161747&f=1&nofb=1&ipt=eef0da5003f3e0b752fe88829bbb5eb06198cdb826e5dea0d45a1f55a837beee",
    },
    {
        name: "AMPFIBIAN",
        species: "Amperi",
        planet: "Tesslos",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Zh79t6ZXVDuWNeBqHCeEv4zrwNkDEMQ3lw&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBAQKJhyjhhjuKvrM8h-NOPp6PtPP2lf0IA&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2Fe%2Fe1%2FNs457Wv.png%2Frevision%2Flatest%3Fcb%3D20210314022620&f=1&nofb=1&ipt=374a2ffab7ad885e4ffe6f199bd4f93c777de07da9949d03c5369f5b6f8bde6c",
    },
    {
        name: "ARMODRILLO",
        species: "Talpaedan",
        planet: "Terraexcava",
        img1:"https://i.ytimg.com/vi/xVTwgTa2xEM/maxresdefault.jpg",img2:"https://preview.redd.it/alright-i-need-answers-how-strong-is-armodrillo-v0-euux37oj2hmd1.jpeg?auto=webp&s=03226f6af5e65fde5c77b90307c70e06ff983da9",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F1%2F10%2FOV_Armodrillo_Stand.png%2Frevision%2Flatest%3Fcb%3D20250228082219&f=1&nofb=1&ipt=f9b1f19945c3a599892fa60cd5a169f12208ce50670c702aef908d50f135b4a4",
    },
    {
        name: "TERRASPIN",
        species: "Geochelone Aerio",
        planet: "Aldabra",
        img1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGFHT_kg76RWt7OQjnDksG6ZVWsYG29MpYQ&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6X6ENNyZq4g3jwVPu6zFKpy0WWQG7g0H-Q&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F8%2F88%2FOV_Terraspin_Stand.PNG%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20210515162353&f=1&nofb=1&ipt=be724bb6d9c5621a721d907bd0c3f22419fd77b309197cdac4a04bb10cdd9b4f",
    },
    {
        name: "NRG",
        species: "Prypiatosian-B",
        planet: "Prypiatos",
        img1:"https://ben10hero.com/wp-content/uploads/2017/02/notln_451.png",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0mJZBtao05t4Pg7zdlrf6a_Ju03Sh3j9pA&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2Fb%2Fbf%2FNRG_OV_(1).png%2Frevision%2Flatest%3Fcb%3D20200603232401%26path-prefix%3Des&f=1&nofb=1&ipt=68eaea856687a2b8aff3c0053b2da99d063c5ec92723e14e4c4a32eb9e2e5938",
    },
    {
        name: "WATER HAZARD",
        species: "Orishan",
        planet: "Andromeda Galaxy",
        img1:"https://preview.redd.it/genuine-question-why-do-so-many-people-like-water-hazard-v0-lz7wbt0cetdb1.png?auto=webp&s=bfe82c1b033a6283cda42fbced296e9b34be30c0",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRwdwYg8Qc-fgWB0umQR_EYcZtnub-h5OlQ&s",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2F7%2F7b%2FWaterguy.png%2Frevision%2Flatest%3Fcb%3D20140928023751&f=1&nofb=1&ipt=1240cb8e924722bc9aaaadc150488586fae2a3a073d8646d6281dc8db73b5faf",
    }
];

let currentIndex = 0;
const dial = document.querySelector('.omnitrix-core');
const ring = document.querySelector('.ring-outer');
const carouselContainer = document.getElementById('carousel');

// UI Elements
const display = {
    name: document.getElementById('alienName'),
    species: document.getElementById('alienSpecies'),
    planet: document.getElementById('alienPlanet'),
    img1: document.getElementById('img1'),
    img2: document.getElementById('img2')
};

// initialize Carousel
function initCarousel() {
    carouselContainer.innerHTML = '';
    aliens.forEach((alien, index) => {
        const card = document.createElement('div');
        card.classList.add('alien-card');
        card.id = `alien-${index}`;

        const img = document.createElement('img');
        img.src = alien.image;
        img.alt = alien.name;

        card.appendChild(img);
        carouselContainer.appendChild(card);
    });
    updateCarousel();
}

function updateCarousel() {
    const cards = document.querySelectorAll('.alien-card');

    cards.forEach((card, index) => {
        // Reset classes
        card.className = 'alien-card';

        // Calculate relative position
        let diff = index - currentIndex;

        // Handle wrapping for infinite feel relative logic
        if (diff < -2) diff += aliens.length;
        if (diff > 2) diff -= aliens.length;

        if (index === currentIndex) {
            card.classList.add('active');
        } else if (diff === 1 || (currentIndex === aliens.length - 1 && index === 0)) {
            // Next item
            // Simplfy wrap logic for visual neighbor
            if (index === (currentIndex + 1) % aliens.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        } else if (diff === -1 || (currentIndex === 0 && index === aliens.length - 1)) {
            // Prev item
            if (index === (currentIndex - 1 + aliens.length) % aliens.length) {
                card.classList.add('prev');
            } else {
                card.classList.add('hidden');
            }
        } else {
            card.classList.add('hidden');
        }
    });

    // Update Text Info---------------
    const alien = aliens[currentIndex];
    display.name.setAttribute('data-text', alien.name);
    display.species.innerText = alien.species;
    display.planet.innerText = alien.planet;
    display.img1.src = alien.img1;
    display.img2.src = alien.img2;
    display.name.innerText = alien.name;

    //name iffect ------------
    let word = "ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz"
    let itration = 0
    const interval = setInterval(()=>{
        const newName = alien.name.split("").map((char, index)=>{
            if(index < itration){
                return char
            }
            return word.split("")[Math.floor(Math.random()*56)]
        }).join("")
        
        display.name.innerText = newName

        itration += 0.3
    },20)

    setTimeout(() => {
      clearInterval(interval)
    }, 1000)
}

function rotateDial(direction) {
    // direction: 1 (right) or -1 (left)
    const rotation = direction * 45;

    // Animate Ring
    ring.style.transition = "transform 0.3s ease-out";
    ring.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        ring.style.transition = "none";
        ring.style.transform = "rotate(0deg)";
    }, 300);

    // Update Index
    currentIndex = (currentIndex + direction + aliens.length) % aliens.length;

    // Trigger update
    updateCarousel();
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', () => rotateDial(1));
document.getElementById('prevBtn').addEventListener('click', () => rotateDial(-1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') rotateDial(1);
    if (e.key === 'ArrowLeft') rotateDial(-1);
});

dial.addEventListener('click', () => {
    dial.style.transform = "scale(0.9)";
    const activeCard = document.querySelector('.alien-card.active img');
    activeCard.style.filter = "brightness(2) drop-shadow(0 0 50px #39ff14)";

    setTimeout(() => {
        dial.style.transform = "scale(1)";
        activeCard.style.filter = "drop-shadow(0 0 20px var(--core-green)) sepia(100%) hue-rotate(50deg) saturate(300%) contrast(1.2)";
        alert(`TRANSFORMATION INITIATED: ${aliens[currentIndex].name}`);
    }, 200);
});

// Start
initCarousel();
