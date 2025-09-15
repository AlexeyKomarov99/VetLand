const formatPhoneNumber = (value) => {
  // Очищаем строку от всего, кроме цифр
  const cleaned = value.replace(/\D/g, "");

  // Форматируем строку в виде +7 (XXX) XXX-XX-XX
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }

  // При неполном вводе возвращаем текущую строку
  return cleaned.length > 1
    ? `+7 (${cleaned.slice(1, 4) || ""}) ${cleaned.slice(4, 7) || ""}${
        cleaned.length > 7 ? "-" : ""
      }${cleaned.slice(7, 9) || ""}${
        cleaned.length > 9 ? "-" : ""
      }${cleaned.slice(9, 11) || ""}`
    : "+7";
};

export default formatPhoneNumber;