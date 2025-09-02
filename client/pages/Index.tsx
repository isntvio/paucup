import { useEffect, useState } from "react";

// Schedule data structure
interface Teacher {
  name: string;
  photo: string;
}

interface ScheduleItem {
  time: string;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: Teacher;
  day: string;
}

const teachers: Record<string, Teacher> = {
  "Bu Nurhanan Afifah": {
    name: "Bu Nurhanan Afifah, S.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Mrs. Zian Muzakkiyah": {
    name: "Mrs. Zian Muzakkiyah Kosman, S.Pd, M.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Ahmad Jumadi": {
    name: "Pak Ahmad Jumadi, S.Kom.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Bu Dhian Nur Rahayu": {
    name: "Bu Dhian Nur Rahayu, ST, M.Kom.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Bu Hani Siti Nuraeni": {
    name: "Bu Hani Siti Nuraeni, S.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Drs. Deden Hamdani": {
    name: "Pak Drs. Deden Hamdani, M.M.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Gunawan Busyaeri": {
    name: "Pak Gunawan Busyaeri, S.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Yusuf Effendy": {
    name: "Pak Yusuf Effendy, S.T., M.Kom",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Bu Dewi Lestari Nengsih": {
    name: "Bu Dewi Lestari Nengsih, S.IP.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Darwis Prasetyo": {
    name: "Pak Darwis Prasetyo, S.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Bu Indria Listiani Ningrum": {
    name: "Bu Indria Listiani Ningrum, S.T.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  },
  "Pak Acun": {
    name: "Pak Acun, S.Pd.",
    photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
  }
};

const labManager: Teacher = {
  name: "Yusuf Effendy, S.T., M.Kom",
  photo: "https://api.builder.io/api/v1/image/assets/TEMP/98886d60bcbf3efe4ecea9efc86f224db66ab4fc?width=400"
};

const schedule: ScheduleItem[] = [
  // Monday
  { time: "07:15 - 07:55", startTime: "07:15", endTime: "07:55", subject: "PST (Psikotes)", teacher: teachers["Bu Nurhanan Afifah"], day: "Senin" },
  { time: "07:55 - 08:35", startTime: "07:55", endTime: "08:35", subject: "PST (Psikotes)", teacher: teachers["Bu Nurhanan Afifah"], day: "Senin" },
  { time: "08:35 - 09:15", startTime: "08:35", endTime: "09:15", subject: "Inggris", teacher: teachers["Mrs. Zian Muzakkiyah"], day: "Senin" },
  { time: "09:30 - 10:10", startTime: "09:30", endTime: "10:10", subject: "Inggris", teacher: teachers["Mrs. Zian Muzakkiyah"], day: "Senin" },
  { time: "10:10 - 10:50", startTime: "10:10", endTime: "10:50", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  { time: "10:50 - 11:30", startTime: "10:50", endTime: "11:30", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  { time: "11:30 - 12:10", startTime: "11:30", endTime: "12:10", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  { time: "13:00 - 13:40", startTime: "13:00", endTime: "13:40", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  { time: "13:40 - 14:20", startTime: "13:40", endTime: "14:20", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  { time: "14:20 - 15:00", startTime: "14:20", endTime: "15:00", subject: "PWB", teacher: teachers["Pak Ahmad Jumadi"], day: "Senin" },
  
  // Tuesday
  { time: "07:15 - 08:35", startTime: "07:15", endTime: "08:35", subject: "PBT", teacher: teachers["Bu Dhian Nur Rahayu"], day: "Selasa" },
  { time: "08:35 - 09:55", startTime: "08:35", endTime: "09:55", subject: "PBT", teacher: teachers["Bu Dhian Nur Rahayu"], day: "Selasa" },
  { time: "10:10 - 11:30", startTime: "10:10", endTime: "11:30", subject: "PBT", teacher: teachers["Bu Dhian Nur Rahayu"], day: "Selasa" },
  { time: "11:30 - 12:10", startTime: "11:30", endTime: "12:10", subject: "PAI", teacher: teachers["Bu Hani Siti Nuraeni"], day: "Selasa" },
  { time: "13:00 - 13:40", startTime: "13:00", endTime: "13:40", subject: "INDONESIA", teacher: teachers["Pak Drs. Deden Hamdani"], day: "Selasa" },
  { time: "13:40 - 14:20", startTime: "13:40", endTime: "14:20", subject: "INDONESIA", teacher: teachers["Pak Drs. Deden Hamdani"], day: "Selasa" },
  { time: "14:20 - 15:00", startTime: "14:20", endTime: "15:00", subject: "INDONESIA", teacher: teachers["Pak Drs. Deden Hamdani"], day: "Selasa" },

  // Wednesday
  { time: "07:15 - 08:35", startTime: "07:15", endTime: "08:35", subject: "PKK", teacher: teachers["Pak Gunawan Busyaeri"], day: "Rabu" },
  { time: "08:35 - 09:55", startTime: "08:35", endTime: "09:55", subject: "PKK", teacher: teachers["Pak Gunawan Busyaeri"], day: "Rabu" },
  { time: "10:10 - 11:30", startTime: "10:10", endTime: "11:30", subject: "PKK", teacher: teachers["Pak Gunawan Busyaeri"], day: "Rabu" },
  { time: "11:30 - 12:10", startTime: "11:30", endTime: "12:10", subject: "PPB", teacher: teachers["Pak Yusuf Effendy"], day: "Rabu" },
  { time: "13:00 - 15:00", startTime: "13:00", endTime: "15:00", subject: "PPB", teacher: teachers["Pak Yusuf Effendy"], day: "Rabu" },

  // Thursday
  { time: "07:15 - 07:55", startTime: "07:15", endTime: "07:55", subject: "PST (Psikotes)", teacher: teachers["Bu Nurhanan Afifah"], day: "Kamis" },
  { time: "07:55 - 08:35", startTime: "07:55", endTime: "08:35", subject: "PST (Psikotes)", teacher: teachers["Bu Nurhanan Afifah"], day: "Kamis" },
  { time: "08:35 - 09:15", startTime: "08:35", endTime: "09:15", subject: "Inggris", teacher: teachers["Mrs. Zian Muzakkiyah"], day: "Kamis" },
  { time: "09:30 - 10:10", startTime: "09:30", endTime: "10:10", subject: "Inggris", teacher: teachers["Mrs. Zian Muzakkiyah"], day: "Kamis" },
  { time: "10:10 - 10:50", startTime: "10:10", endTime: "10:50", subject: "PPS", teacher: teachers["Bu Dewi Lestari Nengsih"], day: "Kamis" },
  { time: "10:50 - 11:30", startTime: "10:50", endTime: "11:30", subject: "PPS", teacher: teachers["Bu Dewi Lestari Nengsih"], day: "Kamis" },
  { time: "11:30 - 12:10", startTime: "11:30", endTime: "12:10", subject: "PAI", teacher: teachers["Bu Hani Siti Nuraeni"], day: "Kamis" },
  { time: "13:00 - 13:40", startTime: "13:00", endTime: "13:40", subject: "PAI", teacher: teachers["Bu Hani Siti Nuraeni"], day: "Kamis" },
  { time: "13:40 - 14:20", startTime: "13:40", endTime: "14:20", subject: "PFS", teacher: teachers["Pak Darwis Prasetyo"], day: "Kamis" },
  { time: "14:20 - 15:00", startTime: "14:20", endTime: "15:00", subject: "PFS", teacher: teachers["Pak Darwis Prasetyo"], day: "Kamis" },

  // Friday
  { time: "07:15 - 08:35", startTime: "07:15", endTime: "08:35", subject: "BSD", teacher: teachers["Bu Indria Listiani Ningrum"], day: "Jumat" },
  { time: "08:35 - 09:55", startTime: "08:35", endTime: "09:55", subject: "BSD", teacher: teachers["Bu Indria Listiani Ningrum"], day: "Jumat" },
  { time: "10:10 - 11:30", startTime: "10:10", endTime: "11:30", subject: "BSD", teacher: teachers["Bu Indria Listiani Ningrum"], day: "Jumat" },
  { time: "11:30 - 12:10", startTime: "11:30", endTime: "12:10", subject: "MTK", teacher: teachers["Pak Acun"], day: "Jumat" },
  { time: "13:00 - 13:40", startTime: "13:00", endTime: "13:40", subject: "MTK", teacher: teachers["Pak Acun"], day: "Jumat" },
  { time: "13:40 - 14:20", startTime: "13:40", endTime: "14:20", subject: "MTK", teacher: teachers["Pak Acun"], day: "Jumat" }
];

export default function Index() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSubject, setCurrentSubject] = useState<ScheduleItem | null>(null);
  const [isBreakTime, setIsBreakTime] = useState(true);

  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  const getCurrentSubject = (now: Date) => {
    const currentDay = dayNames[now.getDay()];
    const currentTimeStr = now.toTimeString().slice(0, 5);

    const todaySchedule = schedule.filter(item => item.day === currentDay);

    for (const item of todaySchedule) {
      if (currentTimeStr >= item.startTime && currentTimeStr <= item.endTime) {
        return item;
      }
    }
    return null;
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);

      const subject = getCurrentSubject(now);
      setCurrentSubject(subject);
      setIsBreakTime(!subject);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const currentDay = dayNames[currentTime.getDay()];
  const todaySchedule = schedule.filter(item => item.day === currentDay);

  const displayInfo = isBreakTime ? {
    title: "Penanggung Jawab Lab",
    name: labManager.name,
    photo: labManager.photo
  } : {
    title: "Mata Pelajaran Berlangsung",
    name: currentSubject?.teacher.name || "",
    photo: currentSubject?.teacher.photo || ""
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative font-['Poppins']">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/d3d031c83780c6fe8033c34fdef984cfec332b55?width=2668')",
          filter: "blur(10px)",
          transform: "scale(1.05)"
        }}
      />

      {/* Main Container */}
      <div className="relative h-full flex">
        {/* Left Sidebar - Schedule */}
        <div className="w-80 h-full overflow-y-auto" style={{ background: 'rgba(59, 89, 152, 0.5)' }}>
          <div className="p-3 space-y-0">
            {todaySchedule.map((item, index) => (
              <div key={index} className="relative">
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="text-white font-semibold text-xl leading-tight">
                      {item.time}
                    </div>
                    <div className="text-white font-semibold text-lg">
                      {item.subject}
                    </div>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white mx-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Header */}
          <div className="absolute top-0 right-4 z-10">
            <div className="bg-white rounded-3xl shadow-lg px-8 py-4 flex items-center gap-4">
              <span className="text-black font-bold text-4xl">Lab. 1</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/33e5848381c6694a962caaa66fd395800fc528f9?width=164"
                alt="Logo Neskar"
                className="w-16 h-16"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0ea6069931e6ce26214360ec1aea204256852fe4?width=152"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>

          {/* Teacher Photo Circle */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 z-20">
            <div className="relative">
              {/* White circle background with shadow */}
              <div className="w-96 h-96 rounded-full bg-white shadow-2xl"></div>
              {/* Teacher photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img
                  src={displayInfo.photo}
                  alt={displayInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="absolute left-8 top-4 z-10 space-y-6">
            {/* Title */}
            <h1 className="font-bold leading-tight" style={{ fontSize: '70px' }}>
              <span className="text-white drop-shadow-lg">Penanggung </span>
              <span className="text-cyan-400 drop-shadow-lg">Jawab Lab</span>
            </h1>

            {/* Teacher/Manager Name */}
            <h2 className="text-white text-4xl font-semibold drop-shadow-lg max-w-lg">
              {displayInfo.name}
            </h2>

            {/* Current Time */}
            <div className="text-white font-bold drop-shadow-lg" style={{ fontSize: '64px' }}>
              {formatTime(currentTime)}
            </div>

            {/* Day */}
            <div className="text-white text-4xl font-semibold drop-shadow-lg">
              {currentDay}
            </div>

            {/* Date */}
            <div className="text-white text-5xl font-semibold drop-shadow-lg">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
