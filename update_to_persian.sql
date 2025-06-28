-- بروزرسانی جدول کاربران
UPDATE users 
SET name = CASE 
    WHEN name LIKE 'User%' THEN REPLACE(name, 'User', 'کاربر')
    WHEN name LIKE 'Admin%' THEN REPLACE(name, 'Admin', 'مدیر')
    ELSE 'کاربر ' || id::text
END;

-- بروزرسانی جدول باشگاه‌ها
UPDATE clubs 
SET name = CASE 
    WHEN name LIKE 'Club%' THEN REPLACE(name, 'Club', 'باشگاه')
    ELSE 'باشگاه ' || id::text
END;

-- بروزرسانی جدول تورنمنت‌ها
UPDATE tournaments 
SET name = CASE 
    WHEN name LIKE 'Tournament%' THEN REPLACE(name, 'Tournament', 'مسابقه')
    WHEN name LIKE 'League%' THEN REPLACE(name, 'League', 'لیگ')
    ELSE 'مسابقه ' || id::text
END,
description = CASE 
    WHEN description IS NOT NULL THEN 'توضیحات مسابقه ' || id::text
    ELSE NULL
END;

-- بروزرسانی جدول تیم‌ها
UPDATE teams 
SET name = CASE 
    WHEN name LIKE 'Team%' THEN REPLACE(name, 'Team', 'تیم')
    ELSE 'تیم ' || id::text
END;

-- بروزرسانی جدول بازیکنان
UPDATE players 
SET name = CASE 
    WHEN name LIKE 'Player%' THEN REPLACE(name, 'Player', 'بازیکن')
    ELSE 'بازیکن ' || id::text
END;

-- بروزرسانی جدول مراحل
UPDATE stages 
SET name = CASE 
    WHEN name LIKE 'Stage%' THEN REPLACE(name, 'Stage', 'مرحله')
    WHEN name LIKE 'Round%' THEN REPLACE(name, 'Round', 'دور')
    ELSE 'مرحله ' || id::text
END;

-- بروزرسانی جدول زمین‌های بازی
UPDATE courts 
SET name = CASE 
    WHEN CAST(name AS text) LIKE 'Court%' THEN REPLACE(CAST(name AS text), 'Court', 'زمین')
    ELSE 'زمین ' || id::text
END;

-- بروزرسانی جدول دورها
UPDATE rounds 
SET name = CASE 
    WHEN name LIKE 'Round%' THEN REPLACE(name, 'Round', 'دور')
    ELSE 'دور ' || id::text
END; 