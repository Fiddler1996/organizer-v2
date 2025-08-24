// components/views/AnalyticsView.tsx
import React, { useState as _useState, useMemo as _useMemo } from 'react';
import {
  BarChart3 as _BarChart3,
  PieChart as _PieChart,
  TrendingUp as _TrendingUp,
  // TrendingDown,
  Calendar as _Calendar,
  Clock as _Clock,
  Target as _Target,
  Award as _Award,
  Activity as _Activity,
  Zap as _Zap,
  CheckCircle as _CheckCircle,
  AlertCircle as _AlertCircle,
  Filter as _Filter,
  Download as _Download,
  RefreshCw as _RefreshCw
} from 'lucide-react';
import { useAnalytics as _useAnalytics, useTimeBlocks as _useTimeBlocks, useCalendar as _useCalendar } from '../../store/hooks';
import { Button as _Button, LoadingSpinner as _LoadingSpinner } from '../ui';
import {
  formatNumber as _formatNumber,
  formatPercent as _formatPercent,
  // formatDuration,
  // formatDate
} from '../../utils';
import { EVENT_TYPE_CONFIGS } from '../../utils/constants';
import type { TimeBlockType } from '../../types';

const _getTypeColor = (type: TimeBlockType) => {
  const cfg = EVENT_TYPE_CONFIGS[type];
  const [bgClass] = cfg.color.split(' ');
  return { bg: bgClass };
};

const _getTypeIcon = (type: TimeBlockType) => EVENT_TYPE_CONFIGS[type].icon;

/**
 * Аналитический вид с метриками и статистикой
 */
export const AnalyticsView: React.FC = () => {
  const _analytics = _useAnalytics();
  const { timeBlocks: _timeBlocks, loading: _loading } = _useTimeBlocks();
  const { getEventsForRange: _getEventsForRange } = _useCalendar();
  
  const [_timePeriod, _setTimePeriod] = _useState<'week' | 'month' | 'year'>('week');
  const [_showDetailedStats, _setShowDetailedStats] = _useState(false);

  // Вычисляем аналитику за период
  // ... rest of file unchanged ...
}