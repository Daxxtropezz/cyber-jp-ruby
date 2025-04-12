class HackerService
  JAPANESE_HACKER_TERMS = [
    "クラッキング成功",
    "データ抽出中",
    "暗号解読完了",
    "バックドア設置済み",
    "ルート権限取得"
  ]

  def perform_hack(target)
    {
      target: target,
      status: :compromised,
      access_level: rand(1..10),
      term: JAPANESE_HACKER_TERMS.sample,
      timestamp: Time.now.strftime("%Y-%m-%d %H:%M:%S")
    }
  end
end