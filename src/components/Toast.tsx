import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import type { ToastVariant } from '@/hooks/useToast';

export default function Toast({
  message,
  visible,
  variant = 'success',
  onClose,
}: {
  message: string;
  visible: boolean;
  variant?: ToastVariant;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 24, x: '-50%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-[200] flex items-center gap-3 rounded-xl border border-hairline bg-charcoal-light px-4 py-3 shadow-2xl"
        >
          {variant === 'error' ? (
            <AlertCircle className="h-5 w-5 text-rose-400 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
          )}
          <span className="text-sm text-white">{message}</span>
          <button
            onClick={onClose}
            aria-label="Dismiss"
            className="ml-2 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
