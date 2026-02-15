"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

// Venn Diagram: Design ∩ Policy ∩ Trust
export function VennTrustDiagram({ isAr }: { isAr: boolean }) {
  return (
    <motion.div {...fadeIn} className="my-16">
      <div className="bg-madar-50 rounded-3xl p-8 lg:p-12 border border-madar-100">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-6">
          {isAr ? "الشكل ١: تقاطع التصميم والسياسة والثقة" : "FIGURE 1: THE INTERSECTION OF DESIGN, POLICY & TRUST"}
        </p>
        <svg viewBox="0 0 600 400" className="w-full max-w-2xl mx-auto" aria-label="Venn diagram showing intersection of Design, Policy, and Trust">
          {/* Design circle */}
          <circle cx="230" cy="180" r="130" fill="none" stroke="#1A5C3F" strokeWidth="2" opacity="0.3" />
          <circle cx="230" cy="180" r="130" fill="#1A5C3F" opacity="0.06" />
          <text x="160" y="120" className="text-sm font-bold" fill="#0F3D2A">{isAr ? "التصميم" : "Design"}</text>

          {/* Policy circle */}
          <circle cx="370" cy="180" r="130" fill="none" stroke="#2A7D5B" strokeWidth="2" opacity="0.3" />
          <circle cx="370" cy="180" r="130" fill="#2A7D5B" opacity="0.06" />
          <text x="400" y="120" className="text-sm font-bold" fill="#0F3D2A">{isAr ? "السياسة" : "Policy"}</text>

          {/* Trust circle */}
          <circle cx="300" cy="290" r="130" fill="none" stroke="#3A9B6B" strokeWidth="2" opacity="0.3" />
          <circle cx="300" cy="290" r="130" fill="#3A9B6B" opacity="0.06" />
          <text x="270" y="380" className="text-sm font-bold" fill="#0F3D2A">{isAr ? "الثقة" : "Trust"}</text>

          {/* Center intersection */}
          <circle cx="300" cy="215" r="35" fill="#1A5C3F" opacity="0.15" />
          <text x="300" y="210" textAnchor="middle" className="text-xs font-bold" fill="#0C2E1F">
            {isAr ? "لغة" : "Design"}
          </text>
          <text x="300" y="228" textAnchor="middle" className="text-xs font-bold" fill="#0C2E1F">
            {isAr ? "التصميم" : "Language"}
          </text>

          {/* Pair intersections */}
          <text x="300" y="155" textAnchor="middle" className="text-[10px]" fill="#1A5C3F" opacity="0.7">
            {isAr ? "الحوكمة الرقمية" : "Digital Governance"}
          </text>
          <text x="225" y="268" textAnchor="middle" className="text-[10px]" fill="#1A5C3F" opacity="0.7">
            {isAr ? "تصميم الثقة" : "Trust Design"}
          </text>
          <text x="375" y="268" textAnchor="middle" className="text-[10px]" fill="#1A5C3F" opacity="0.7">
            {isAr ? "شرعية السياسة" : "Policy Legitimacy"}
          </text>
        </svg>
        <p className="text-sm text-gray-500 mt-4 text-center max-w-lg mx-auto">
          {isAr
            ? "لغة التصميم تقع عند تقاطع التصميم والسياسة والثقة — حيث تصبح الحوكمة مرئية من خلال الواجهات."
            : "Design language sits at the intersection of design, policy, and trust — where governance becomes visible through interfaces."}
        </p>
      </div>
    </motion.div>
  );
}

// Pyramid: Design Maturity Levels
export function PyramidDesignDiagram({ isAr }: { isAr: boolean }) {
  const levels = isAr
    ? [
        { label: "لغة التصميم الحضاري", width: 120, color: "#0C2E1F" },
        { label: "أنظمة التصميم المؤسسي", width: 200, color: "#0F3D2A" },
        { label: "لغة التصميم الموحدة", width: 280, color: "#1A5C3F" },
        { label: "تجربة المستخدم والواجهات", width: 360, color: "#2A7D5B" },
        { label: "التصميم البصري الأساسي", width: 440, color: "#3A9B6B" },
      ]
    : [
        { label: "Civilizational Design Language", width: 120, color: "#0C2E1F" },
        { label: "Institutional Design Systems", width: 200, color: "#0F3D2A" },
        { label: "Unified Design Language", width: 280, color: "#1A5C3F" },
        { label: "UX & Interface Design", width: 360, color: "#2A7D5B" },
        { label: "Visual Design Fundamentals", width: 440, color: "#3A9B6B" },
      ];

  return (
    <motion.div {...fadeIn} className="my-16">
      <div className="bg-madar-50 rounded-3xl p-8 lg:p-12 border border-madar-100">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-8">
          {isAr ? "الشكل ١: هرم نضج التصميم" : "FIGURE 1: DESIGN MATURITY PYRAMID"}
        </p>
        <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
          {levels.map((level, i) => (
            <div
              key={i}
              className="flex items-center justify-center py-3 rounded-xl text-white text-xs sm:text-sm font-bold text-center transition-all hover:scale-105"
              style={{ width: `${(level.width / 440) * 100}%`, backgroundColor: level.color, minWidth: "fit-content", padding: "12px 16px" }}
            >
              {level.label}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center max-w-lg mx-auto">
          {isAr
            ? "التصميم على المستوى الحضاري لا يبدأ من الواجهات — بل يبدأ من القيم والهوية المؤسسية وينعكس نزولاً."
            : "Civilizational-scale design does not start from interfaces — it begins with values and institutional identity and cascades downward."}
        </p>
      </div>
    </motion.div>
  );
}

// Flow Diagram: Hospitality Journey
export function FlowHospitalityDiagram({ isAr }: { isAr: boolean }) {
  const steps = isAr
    ? ["الترحيب", "التوجيه", "الطمأنة", "التمكين", "المتابعة"]
    : ["Welcome", "Guide", "Reassure", "Empower", "Follow-up"];

  const descriptions = isAr
    ? ["الانطباع الأول", "مسار واضح", "بناء الثقة", "إنجاز المهمة", "الاهتمام المستمر"]
    : ["First impression", "Clear pathway", "Build confidence", "Task completion", "Continued care"];

  return (
    <motion.div {...fadeIn} className="my-16">
      <div className="bg-madar-50 rounded-3xl p-8 lg:p-12 border border-madar-100">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-8">
          {isAr ? "الشكل ١: رحلة الضيافة الرقمية" : "FIGURE 1: THE DIGITAL HOSPITALITY JOURNEY"}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              <div className="w-14 h-14 rounded-full bg-madar-600 text-white flex items-center justify-center text-lg font-extrabold shadow-lg shadow-madar-600/20 z-10">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-0.5 bg-madar-300/40" />
              )}
              <p className="mt-3 text-sm font-bold text-madar-900">{step}</p>
              <p className="text-xs text-gray-500 mt-1 text-center">{descriptions[i]}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8 text-center max-w-lg mx-auto">
          {isAr
            ? "الضيافة الرقمية تتبع نفس مبادئ الضيافة التقليدية — من الترحيب إلى المتابعة، كل نقطة تفاعل هي فرصة لبناء الثقة."
            : "Digital hospitality follows the same principles as traditional hospitality — from welcome to follow-up, every touchpoint is an opportunity to build trust."}
        </p>
      </div>
    </motion.div>
  );
}

// Graph: Trust Erosion Over Time
export function ErosionGraphDiagram({ isAr }: { isAr: boolean }) {
  const frictions = isAr
    ? ["إعادة إدخال البيانات", "تطبيق جديد", "حالة غير واضحة", "خطأ بلا تفسير", "وقت انتظار", "إعادة التوجيه"]
    : ["Re-enter data", "New app needed", "Unclear status", "Error, no explanation", "Wait time", "Redirect loop"];

  return (
    <motion.div {...fadeIn} className="my-16">
      <div className="bg-madar-50 rounded-3xl p-8 lg:p-12 border border-madar-100">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-8">
          {isAr ? "الشكل ١: تآكل الثقة عبر نقاط الاحتكاك" : "FIGURE 1: TRUST EROSION THROUGH FRICTION POINTS"}
        </p>
        <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto" aria-label="Graph showing trust declining over friction points">
          {/* Axes */}
          <line x1="60" y1="20" x2="60" y2="260" stroke="#0F3D2A" strokeWidth="1.5" opacity="0.3" />
          <line x1="60" y1="260" x2="580" y2="260" stroke="#0F3D2A" strokeWidth="1.5" opacity="0.3" />

          {/* Y-axis label */}
          <text x="15" y="140" className="text-[10px] font-bold" fill="#0F3D2A" transform="rotate(-90, 15, 140)">
            {isAr ? "مستوى الثقة" : "Trust Level"}
          </text>

          {/* X-axis label */}
          <text x="320" y="295" textAnchor="middle" className="text-[10px] font-bold" fill="#0F3D2A">
            {isAr ? "نقاط الاحتكاك" : "Friction Points"}
          </text>

          {/* Trust decline path */}
          <path
            d="M 60 40 L 150 70 L 230 110 L 320 155 L 410 195 L 490 225 L 570 250"
            fill="none"
            stroke="#1A5C3F"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Area fill */}
          <path
            d="M 60 40 L 150 70 L 230 110 L 320 155 L 410 195 L 490 225 L 570 250 L 570 260 L 60 260 Z"
            fill="#1A5C3F"
            opacity="0.06"
          />

          {/* Friction points */}
          {frictions.map((label, i) => {
            const x = 60 + (i + 1) * 85;
            const y = 40 + (i + 1) * 35;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#1A5C3F" />
                <circle cx={x} cy={y} r="8" fill="none" stroke="#1A5C3F" strokeWidth="1" opacity="0.3" />
                <text x={x} y="278" textAnchor="middle" className="text-[8px]" fill="#6B7280">
                  {label}
                </text>
              </g>
            );
          })}

          {/* High/Low labels */}
          <text x="42" y="45" textAnchor="end" className="text-[9px]" fill="#1A5C3F" opacity="0.6">
            {isAr ? "عالي" : "High"}
          </text>
          <text x="42" y="255" textAnchor="end" className="text-[9px]" fill="#1A5C3F" opacity="0.6">
            {isAr ? "منخفض" : "Low"}
          </text>
        </svg>
        <p className="text-sm text-gray-500 mt-4 text-center max-w-lg mx-auto">
          {isAr
            ? "الثقة لا تنهار فجأة — تتآكل بتراكم الاحتكاكات الصغيرة. كل نقطة احتكاك تقلل الثقة بشكل تدريجي لا رجعة فيه."
            : "Trust does not collapse suddenly — it erodes through accumulated small frictions. Each friction point gradually and irreversibly diminishes trust."}
        </p>
      </div>
    </motion.div>
  );
}

// Layered Diagram: UX vs Design Language vs Institutional Identity
export function LayersDiagram({ isAr }: { isAr: boolean }) {
  const layers = isAr
    ? [
        { label: "الهوية المؤسسية", sub: "القيم · الرسالة · الثقة", color: "#0C2E1F", textColor: "white" },
        { label: "لغة التصميم المؤسسي", sub: "الأنماط · الصوت · السلوك", color: "#1A5C3F", textColor: "white" },
        { label: "نظام التصميم", sub: "المكونات · الشبكة · الألوان", color: "#2A7D5B", textColor: "white" },
        { label: "تجربة المستخدم (UX)", sub: "المسارات · سهولة الاستخدام · التفاعل", color: "#5BBF8A", textColor: "#0C2E1F" },
        { label: "واجهة المستخدم (UI)", sub: "الأزرار · النماذج · التخطيط", color: "#A3DCBE", textColor: "#0C2E1F" },
      ]
    : [
        { label: "Institutional Identity", sub: "Values · Mission · Trust", color: "#0C2E1F", textColor: "white" },
        { label: "Institutional Design Language", sub: "Patterns · Voice · Behavior", color: "#1A5C3F", textColor: "white" },
        { label: "Design System", sub: "Components · Grid · Tokens", color: "#2A7D5B", textColor: "white" },
        { label: "User Experience (UX)", sub: "Flows · Usability · Interaction", color: "#5BBF8A", textColor: "#0C2E1F" },
        { label: "User Interface (UI)", sub: "Buttons · Forms · Layout", color: "#A3DCBE", textColor: "#0C2E1F" },
      ];

  return (
    <motion.div {...fadeIn} className="my-16">
      <div className="bg-madar-50 rounded-3xl p-8 lg:p-12 border border-madar-100">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-8">
          {isAr ? "الشكل ١: طبقات التصميم المؤسسي" : "FIGURE 1: LAYERS OF INSTITUTIONAL DESIGN"}
        </p>
        <div className="flex flex-col gap-2 max-w-xl mx-auto">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-4 transition-all hover:scale-[1.02]"
              style={{ backgroundColor: layer.color }}
            >
              <p className="text-sm sm:text-base font-bold" style={{ color: layer.textColor }}>{layer.label}</p>
              <p className="text-xs mt-1" style={{ color: layer.textColor, opacity: 0.65 }}>{layer.sub}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between max-w-xl mx-auto mt-4 px-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-madar-900" />
            <span className="text-xs text-gray-500 font-medium">{isAr ? "استراتيجي" : "Strategic"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-madar-300" />
            <span className="text-xs text-gray-500 font-medium">{isAr ? "تكتيكي" : "Tactical"}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center max-w-lg mx-auto">
          {isAr
            ? "تحسين UX وحده لا يكفي. لغة التصميم المؤسسي تعمل على مستوى أعمق — تربط الواجهات بالقيم والهوية."
            : "Improving UX alone is insufficient. Institutional design language operates at a deeper level — connecting interfaces to values and identity."}
        </p>
      </div>
    </motion.div>
  );
}
