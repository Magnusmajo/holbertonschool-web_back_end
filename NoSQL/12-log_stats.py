#!/usr/bin/env python3
"""Module"""


from pymongo import MongoClient


def log_stats():
    """Function"""
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    number_logs = collection.count_documents({})
    print(f"{number_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
