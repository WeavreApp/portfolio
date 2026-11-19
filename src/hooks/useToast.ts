import { useState, useCallback } from 'react';

export type ToastVariant = 'success' | 'error';

type ToastState = {
  message: string;
  visible: boolean;
  variant: ToastVariant;
};

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    visible: false,
    variant: 'success',
  });

  const showToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    setToast({ message, visible: true, variant });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return { toast, showToast, hideToast };
}
