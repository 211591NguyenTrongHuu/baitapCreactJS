import { useCallback, useState } from "react";

export default function useCalendarPanel() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = useCallback(() => {
    setShowCalendar((prev) => !prev);
  }, []);

  const hideCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const onPanelChange = useCallback((value, mode) => {
    console.log("Calendar changed:", value.format("YYYY-MM-DD"), mode);
  }, []);

  return {
    showCalendar,
    toggleCalendar,
    hideCalendar,
    onPanelChange,
  };
}
