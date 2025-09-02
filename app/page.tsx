"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  Users,
  Shield,
  ShoppingCart,
  HelpCircle,
  BookOpen,
  Server,
  Crown,
  MessageCircle,
  Gift,
  Star,
  Activity,
  ChevronLeft,
  ChevronRight,
  Heart,
  Swords,
  Home,
  ChevronUp,
  ChevronDown,
  Globe,
  Clock,
  TrendingUp,
  Award,
  Gamepad2,
  Coins,
  Trophy,
  Target,
  Flame,
  Sparkles,
  Map,
  Settings,
  Bell,
  Mail,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MinecraftSMPWebsite() {
  const [activeTab, setActiveTab] = useState("home");
  const [copied, setCopied] = useState(false);
  const [currentPanelSlide, setCurrentPanelSlide] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const serverIP = "---";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const tabs = [
    { id: "home", label: "Ana Sayfa", icon: Home },
    { id: "market", label: "Market", icon: ShoppingCart },
    { id: "support", label: "Destek", icon: HelpCircle },
    { id: "rules", label: "Kurallar", icon: BookOpen },
  ];

  const panelSlides = [
    {
      title: "Güvenlik",
      icon: Shield,
      content: {
        "Anti-Cheat": "Gelişmiş",
        "Koruma Sistemi": "7/24 Aktif",
        Yedekleme: "6 Saatte Bir",
        Moderasyon: "Canlı Destek",
      },
    },
    {
      title: "Topluluk",
      icon: Heart,
      content: {
        "Aktif Oyuncu": "200+ Üye",
        "Discord Üyesi": "1.2K+",
        "Günlük Aktif": "127 Ortalama",
        "Yaş Ortalaması": "14-25",
      },
    },
    {
      title: "Özellikler",
      icon: Star,
      content: {
        "Arazi Koruma": "GriefPrevention",
        Ekonomi: "Vault + Essentials",
        "Özel Eşyalar": "50+ Unique",
        Etkinlikler: "Haftalık",
      },
    },
    {
      title: "PvP & Savaş",
      icon: Swords,
      content: {
        "PvP Alanları": "Belirli Bölgeler",
        "Klan Sistemi": "Aktif",
        "Savaş Etkinlikleri": "Hafta Sonu",
        Ödüller: "Özel Eşyalar",
      },
    },
  ];

  const vipPackages = [
    {
      name: "VIP",
      price: "₺89",
      features: ["Renkli İsim", "VIP Kit", "5 Ev", "Spawn'da Uçma"],
      color: "gradient-blue",
    },
    {
      name: "VIP+",
      price: "₺179",
      features: ["Tüm VIP Özellikleri", "VIP+ Kit", "10 Ev", "Takma Ad Komutu"],
      color: "gradient-purple",
    },
  ];

  const crates = [
    {
      name: "Sıradan Sandık",
      price: "₺29",
      rarity: "Sıradan",
      items: ["Demir Aletler", "Yiyecek", "Temel Malzemeler"],
    },
    {
      name: "Nadir Sandık",
      price: "₺79",
      rarity: "Nadir",
      items: ["Elmas Aletler", "Büyülü Kitaplar", "Nadir Bloklar"],
    },
    {
      name: "Epik Sandık",
      price: "₺159",
      rarity: "Epik",
      items: ["Netherite Aletler", "Elytra", "Shulker Kutuları"],
    },
    {
      name: "Efsanevi Sandık",
      price: "₺299",
      rarity: "Efsanevi",
      items: ["Özel Eşyalar", "Spawner'lar", "Özel Bloklar"],
    },
  ];

  const rules = [
    {
      title: "Hile Yasak",
      description:
        "X-ray, kopyalama hataları ve hack clientlar survival oynanışında kesinlikle yasaktır.",
    },
    {
      title: "Saygılı Olun",
      description:
        "Tüm oyunculara nazik davranın. SMP topluluğumuzda taciz, ayrımcılık veya toksik davranış yasaktır.",
    },
    {
      title: "Sorumlu İnşa Edin",
      description:
        "Survival dünyasını güzel tutun. Spawn alanlarının yakınında rastgele yapılar veya çirkin binalar yapmayın.",
    },
    {
      title: "Sadece Survival Modu",
      description:
        "Bu saf bir survival multiplayer sunucusudur. Oyunculara creative modu verilmez.",
    },
    {
      title: "Spam Yasak",
      description:
        "Sohbette spam yapmak, reklam vermek veya gereksiz mesajlar göndermek yasaktır.",
    },
    {
      title: "Türkçe Sohbet",
      description:
        "Ana sohbet kanalında Türkçe konuşulması tercih edilir. Diğer diller için özel kanallar kullanın.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Image
                    src="/images/vinland-smp-main-logo.png"
                    alt="Vinland SMP Logo"
                    width={500}
                    height={300}
                    className="max-w-full h-auto drop-shadow-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                    En İyi Türk Survival Multiplayer Sunucusu
                  </h1>
                  <p className="text-lg text-yellow-200 max-w-3xl mx-auto leading-relaxed">
                    <span className="inline-flex items-center gap-2 mr-4">
                      <Crown className="h-5 w-5" />
                      Kendi krallığını kur
                    </span>
                    <span className="inline-flex items-center gap-2 mr-4">
                      <Swords className="h-5 w-5" />
                      Epik savaşlara katıl
                    </span>
                    <span className="inline-flex items-center gap-2 mr-4">
                      <Sparkles className="h-5 w-5" />
                      Nadir hazineler keşfet
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Güçlü ittifaklar yap
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 bg-yellow-500/60 hover:bg-yellow-600/70 text-white font-bold shadow-lg backdrop-blur-md border border-yellow-300/30"
                >
                  <Gamepad2 className="h-9 w-9 mr-3" />
                  Sunucu yakında açılacaktır!
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="status-button-blur bg-gradient-to-br from-yellow-600/60 to-yellow-800/70 p-6 rounded-xl text-center shadow-xl backdrop-blur-sm">
                <Users className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">---</div>
                <div className="text-sm text-green-100">Çevrimiçi</div>
              </div>
              <div className="status-button-blur bg-gradient-to-br from-yellow-600/60 to-yellow-800/70 p-6 rounded-xl text-center shadow-xl backdrop-blur-sm">
                <Globe className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">---</div>
                <div className="text-sm text-green-100">Toplam Üye</div>
              </div>
              <div className="status-button-blur bg-gradient-to-br from-orange-500/60 to-orange-700/70 p-6 rounded-xl text-center shadow-xl backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-orange-100">Uptime</div>
              </div>
              <div className="status-button-blur bg-gradient-to-br from-orange-500/60 to-orange-700/70 p-6 rounded-xl text-center shadow-xl backdrop-blur-sm">
                <Award className="h-8 w-8 mx-auto mb-3 text-white" />
                <div className="text-2xl font-bold text-white">1.21</div>
                <div className="text-sm text-orange-100">Minecraft</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="minecraft-card p-8 rounded-2xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/30 transition-all duration-300">
                <Shield className="h-12 w-12 text-white-400 mb-4" />
                <h3 className="text-xl font-bold text-yellow mb-3">
                  %100 Güvenli
                </h3>
                <p className="text-white-200/80">
                  Gelişmiş anti-cheat sistemi ve 7/24 moderasyon ile güvenli
                  oyun deneyimi.
                </p>
              </div>
            </div>

            <div className="minecraft-card p-8 rounded-2xl border border-slate-600/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                <Bell className="h-6 w-6" />
                Son Haberler & Duyurular
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-500/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-yellow-600/80 text-white font-bold flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      YENİ!
                    </Badge>
                    <span className="text-xl font-bold text-white flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      Yakında!
                    </span>
                  </div>
                  <p className="text-yellow-100/90">
                    Yepyeni bir dünyaya adım at! Vinland SMP yakında.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "market":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <ShoppingCart className="h-6 w-6" />
                Sunucu Mağazası
              </h2>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <Coins className="h-4 w-4" />
                Sunucuyu destekleyin ve özel ayrıcalıklar kazanın!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">
                <Crown className="h-5 w-5" />
                VIP Rütbeleri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vipPackages.map((vip, index) => (
                  <Card
                    key={index}
                    className={`${vip.color} hover:scale-105 transition-transform`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-white flex items-center gap-2">
                          <Crown className="h-5 w-5" />
                          {vip.name}
                        </CardTitle>
                        <Badge className="bg-white/20 text-white">
                          <Coins className="h-3 w-3 mr-1" />
                          {vip.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-1 mb-4">
                        {vip.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-white text-sm"
                          >
                            <Star className="h-3 w-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        size="sm"
                        className="w-full bg-white/20 text-white border-white/20 hover:bg-white/30"
                      >
                        <ShoppingCart className="h-3 w-3 mr-2" />
                        {vip.name} Satın Al
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">
                <Gift className="h-5 w-5" />
                Gizem Sandıkları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {crates.map((crate, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Gift className="h-4 w-4" />
                          {crate.name}
                        </CardTitle>
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            crate.rarity === "Efsanevi"
                              ? "destructive"
                              : crate.rarity === "Epik"
                              ? "default"
                              : crate.rarity === "Nadir"
                              ? "secondary"
                              : "outline"
                          }
                          className="text-xs"
                        >
                          {crate.rarity}
                        </Badge>
                        <span className="text-lg font-bold text-primary flex items-center gap-1">
                          <Coins className="h-4 w-4" />
                          {crate.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 mb-3">
                        <p className="text-xs font-semibold flex items-center gap-1">
                          <Map className="h-3 w-3" />
                          İçerik:
                        </p>
                        <ul className="text-xs space-y-1">
                          {crate.items.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button size="sm" className="w-full text-xs">
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Sandık Al
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "support":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <HelpCircle className="h-6 w-6" />
                Destek Merkezi
              </h2>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <Settings className="h-4 w-4" />
                Yardıma mı ihtiyacınız var? Size yardımcı olmak için buradayız!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Sık Sorulan Sorular
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      Sunucuya nasıl katılırım?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sunucu IP'sini kopyalayın ve Minecraft multiplayer sunucu
                      listenize ekleyin.
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4" />
                      Hangi sürüme ihtiyacım var?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Minecraft Java Edition 1.21 sürümünü destekliyoruz.
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Arazi nasıl korunur?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Altın kürek kullanarak köşeleri seçin ve /claim yazarak
                      survival üssünüzü koruyun.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Destek İletişim
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Destek Talebi Aç
                  </Button>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Veya Discord sunucumuza katılın
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() =>
                        window.open("https://discord.gg/JQdhxW34", "_blank")
                      }
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Discord'a Katıl
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "rules":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold gradient-text flex items-center justify-center gap-3">
                <BookOpen className="h-6 w-6" />
                Sunucu Kuralları
              </h2>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <Shield className="h-4 w-4" />
                Lütfen bu survival multiplayer kurallarını okuyun ve uygulayın
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Önemli Uyarı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Bu survival multiplayer kurallarından herhangi birini ihlal
                  etmek uyarı, geçici ban veya kalıcı ban ile sonuçlanabilir.
                  Yetkili kararları kesindir. İtirazlar Discord sunucumuz
                  üzerinden yapılabilir.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-y",
        scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleLogoClick = () => {
    setActiveTab("home");
  };

  return (
    <div className="min-h-screen minecraft-bg minecraft-bg-scroll">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/vinland-smp-logo.png"
                  alt="Norse SMP Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </button>
            </div>

            <div className="flex items-center gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => handleTabChange(tab.id)}
                    className={`minecraft-button flex items-center gap-2 text-sm px-3 py-2 ${
                      activeTab === tab.id
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    size="sm"
                  >
                    <Icon className="h-3 w-3" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main
        className="max-w-6xl mx-auto px-4 py-6 mb-32 page-transition"
        key={activeTab}
      >
        {renderContent()}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className={`minecraft-button arrow-button-aligned bg-yellow-700/60 hover:bg-yellow-600/70 text-white rounded-t-lg rounded-b-none border-t border-x border-yellow-400/30 px-6 py-3${
              isPanelOpen ? " open" : ""
            } backdrop-blur-md`}
          >
            {isPanelOpen ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronUp className="h-5 w-5" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {isPanelOpen && (
            <motion.div
              className="panel-slide"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-gradient-to-r from-yellow-900 to-yellow-800 border-t border-slate-600/50 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto px-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <Server className="h-6 w-6 text-yellow-400" />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Sunucu IP
                        </div>
                        <div className="flex items-center gap-3">
                          <code className="text-sm font-mono text-orange-300 bg-orange-900/70 px-2 py-1 rounded">
                            {serverIP}
                          </code>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={copyToClipboard}
                            className="minecraft-button h-8 px-3 text-xs bg-yellow-500/40 hover:bg-yellow-600/50 text-yellow-100 border-yellow-300/30 backdrop-blur-md"
                          >
                            <Copy className="h-3 w-3 mr-1" />
                            {copied ? "✓" : "Kopyala"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center status-button-blur p-4 rounded-lg">
                        <div className="text-xl font-bold text-yellow-400 flex items-center justify-center gap-2">
                          <Users className="h-5 w-5" />
                          127/200
                        </div>
                        <div className="text-xs text-yellow-300">
                          Çevrimiçi Oyuncu
                        </div>
                      </div>
                      <div className="text-center status-button-blur p-4 rounded-lg">
                        <div className="text-xl font-bold text-yellow-400 flex items-center justify-center gap-2">
                          <Clock className="h-5 w-5" />
                          99.9%
                        </div>
                        <div className="text-xs text-yellow-300">
                          Sunucu Uptime
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="minecraft-button bg-yellow-500/60 hover:bg-yellow-600/70 text-white font-semibold px-6 py-3 border border-yellow-300/30 backdrop-blur-md">
                        <Activity className="h-5 w-5 mr-2" />
                        Şimdi Katıl!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-900 to-yellow-600 border-t border-yellow-600/40">
                <div className="max-w-6xl mx-auto px-4 py-6">
                  <div className="flex items-center justify-between mb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setCurrentPanelSlide(Math.max(0, currentPanelSlide - 1))
                      }
                      disabled={currentPanelSlide === 0}
                      className="minecraft-button text-yellow-100 hover:bg-yellow-600/20 px-4 py-2 border border-yellow-300/30 backdrop-blur-md"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <div className="flex-1 mx-6">
                      <div className="panel-3d bg-gradient-to-br from-yellow-900/80 to-yellow-800/80 rounded-xl p-8 border border-yellow-600/30">
                        {(() => {
                          const slide = panelSlides[currentPanelSlide];
                          const Icon = slide.icon;
                          return (
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-3 mb-6">
                                <Icon className="h-8 w-8 text-blue-400" />
                                <h3 className="text-2xl font-bold text-yellow">
                                  {slide.title}
                                </h3>
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                {Object.entries(slide.content).map(
                                  ([key, value]) => (
                                    <div key={key} className="text-center">
                                      <div className="text-xl font-bold text-yellow-300">
                                        {value}
                                      </div>
                                      <div className="text-sm text-yellow-200">
                                        {key}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setCurrentPanelSlide(
                          Math.min(
                            panelSlides.length - 1,
                            currentPanelSlide + 1
                          )
                        )
                      }
                      disabled={currentPanelSlide === panelSlides.length - 1}
                      className="minecraft-button text-yellow-100 hover:bg-yellow-600/20 px-4 py-2 border border-yellow-300/30 backdrop-blur-md"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex justify-center gap-3">
                    {panelSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPanelSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentPanelSlide
                            ? "bg-blue-400 scale-125 shadow-lg shadow-yellow-400/50"
                            : "bg-slate-500 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
